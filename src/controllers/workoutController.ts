import { Request, Response } from "express";

import * as workoutService from "../services/workoutService";

export const getAllWorkouts = (req: Request, res: Response) => {
    try {
        const allWorkouts = workoutService.getAllWorkouts();
        res.send(allWorkouts);
    } catch (error: any) {
        res.status(error?.status || 500).send({status: "FAILED"});
    }
};

export const getWorkout = (req: Request, res: Response) => {
    const { params: { workoutId }, } = req;
    if (!workoutId) {
        res.status(400).send({status: "FAILED"});
    }

    try {
        const workout = workoutService.getWorkout(workoutId);
        res.send(workout);
    } catch (error: any) {
        res.status(error?.status || 500).send({status: "FAILED"});
    }
};

export const createWorkout = (req: Request, res: Response) => {
    const { body } = req;
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        res.status(400).send({status: "FAILED"});
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };
    try {
        const createdWorkout = workoutService.createWorkout(newWorkout)
        res.status(201).send(createdWorkout);
    } catch (error: any) {
        res.status(error?.status || 500).send({status: "FAILED"});
    }
};

export const updateWorkout = (req: Request, res: Response) => {
    const { body, params: { workoutId }, } = req;
    if (!workoutId) {
        res.status(400).send({status: "FAILED"});
    }

    try {
        const updatedWorkout = workoutService.updateWorkout(workoutId, body);
        res.send(updatedWorkout);
    } catch (error: any) {
        res.status(error?.status || 500).send({status: "FAILED"});
    }
};

export const deleteWorkout = (req: Request, res: Response) => {
    const { params: { workoutId }, } = req;
    if (!workoutId) {
        res.status(400).send({status: "FAILED"});
    }

    try {
        workoutService.deleteWorkout(workoutId)
        res.status(204).send({ status: "OK" });
    } catch (error: any) {
        res.status(error?.status || 500).send({status: "FAILED"});
    }
};