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
    const createdWorkout = workoutService.createWorkout()
    res.send("Create a new workout");
};

export const updateWorkout = (req: Request, res: Response) => {
    const updatedWorkout = workoutService.updateWorkout()
    res.send("Update an existing workout");
};

export const deleteWorkout = (req: Request, res: Response) => {
    workoutService.deleteWorkout()
    res.send("Delete an existing workout");
};