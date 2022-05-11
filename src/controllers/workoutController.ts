import { Request, Response } from "express";

import * as workoutService from "../services/workoutService";

export const getAllWorkouts = (req: Request, res: Response) => {
    const allWorkouts = workoutService.getAllWorkouts()
    res.send(allWorkouts);
};

export const getWorkout = (req: Request, res: Response) => {
    const { params: { workoutId }, } = req;
    if (!workoutId) {
        return;
    }

    const workout = workoutService.getWorkout(workoutId)
    res.send(workout);
};

export const createWorkout = (req: Request, res: Response) => {
    const { body } = req;
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };
    const createdWorkout = workoutService.createWorkout(newWorkout)
    res.status(201).send(createdWorkout);
};

export const updateWorkout = (req: Request, res: Response) => {
    const { body, params: { workoutId }, } = req;
    if (!workoutId) {
        return;
    }

    const updatedWorkout = workoutService.updateWorkout(workoutId, body);
    res.send(updatedWorkout);
};

export const deleteWorkout = (req: Request, res: Response) => {
    const { params: { workoutId }, } = req;
    if (!workoutId) {
        return;
    }

    workoutService.deleteWorkout(workoutId)
    res.status(204).send({ status: "OK" });
};