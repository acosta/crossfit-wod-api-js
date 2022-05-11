import { v4 as uuid } from "uuid";

import * as workoutDB from "../database/Workout"

export const getAllWorkouts = () => {
    const allWorkouts = workoutDB.getAllWorkouts()
    return allWorkouts;
};

export const getWorkout = (workoutId: any) => {
    const workout = workoutDB.getWorkout(workoutId);
    return workout;
};

export const createWorkout = (newWorkout: any) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    const createdWorkout = workoutDB.createNewWorkout(workoutToInsert)
    return createdWorkout;
};

export const updateWorkout = (workoutId: any, workout: any) => {
    const updatedWorkout = workoutDB.updateWorkout(workoutId, workout);
    return updatedWorkout;
};

export const deleteWorkout = (workoutId: any) => {
    workoutDB.deleteWorkout(workoutId);
};