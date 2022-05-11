import { Request, Response } from "express";

import * as workoutService from "../services/workoutService";

export const getAllWorkouts = (req: Request, res: Response) => {
    const allWorkouts = workoutService.getAllWorkouts()
    res.send(allWorkouts);
};

export const getWorkout = (req: Request, res: Response) => {
    const workout = workoutService.getWorkout()
    res.send("Get an existing workout");
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
    const updatedWorkout = workoutService.updateWorkout()
    res.send("Update an existing workout");
};

export const deleteWorkout = (req: Request, res: Response) => {
    workoutService.deleteWorkout()
    res.send("Delete an existing workout");
};