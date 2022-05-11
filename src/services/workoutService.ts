import * as workoutDB from "../database/Workout"

export const getAllWorkouts = () => {
    const allWorkouts = workoutDB.getAllWorkouts()
    return allWorkouts;
};

export const getWorkout = () => {
    return;
};

export const createWorkout = (newWorkout: any) => {
    const createdWorkout = workoutDB.createNewWorkout(newWorkout)
    return createdWorkout;
};

export const updateWorkout = () => {
    return;
};

export const deleteWorkout = () => {
    return;
};