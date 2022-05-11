import { Request, Response } from "express";

export const getAllWorkouts = (req: Request, res: Response) => {
    res.send("Get all workouts");
};

export const getWorkout = (req: Request, res: Response) => {
    res.send("Get an existing workout");
};

export const createWorkout = (req: Request, res: Response) => {
    res.send("Create a new workout");
};

export const updateWorkout = (req: Request, res: Response) => {
    res.send("Update an existing workout");
};

export const deleteWorkout = (req: Request, res: Response) => {
    res.send("Delete an existing workout");
};