import { v4 as uuid } from "uuid";

import * as workoutDB from "../database/Workout";

export const getAllWorkouts = () => {
    try {
        const allWorkouts = workoutDB.getAllWorkouts();
        return allWorkouts;
    } catch (error: any) {
        throw error;
    }
};

export const getWorkout = (workoutId: any) => {
    try {
        const workout = workoutDB.getWorkout(workoutId);
        return workout;
    } catch (error: any) {
        throw error;
    }
};

export const createWorkout = (newWorkout: any) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    try {
        const createdWorkout = workoutDB.createNewWorkout(workoutToInsert)
        return createdWorkout;
    } catch (error: any) {
        throw error;
    }
};

export const updateWorkout = (workoutId: any, workout: any) => {
    try {
        const updatedWorkout = workoutDB.updateWorkout(workoutId, workout);
        return updatedWorkout;
    } catch (error: any) {
        throw error;
    }
};

export const deleteWorkout = (workoutId: any) => {
    try {
        workoutDB.deleteWorkout(workoutId);
    } catch (error: any) {
        throw error;
    }
};