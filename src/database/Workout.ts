import DB from "./workout_db.json";

export const getAllWorkouts = () => {
    return DB.workouts;
};

export const createNewWorkout = (newWorkout: any) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
        return;
    }
    DB.workouts.push(newWorkout);
    return newWorkout;
};

export const getWorkout = (workoutId: any) => {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
        return;
    }
    return workout;
};

export const deleteWorkout = (workoutId: any) => {
    const indexForDeletion = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (indexForDeletion === -1) {
        return;
    }
    DB.workouts.splice(indexForDeletion, 1);
};

export const updateWorkout = (workoutId: any, workout: any) => {
    const indexForUpdate = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (indexForUpdate === -1) {
        return;
    }

    const updatedWorkout = {
        ...DB.workouts[indexForUpdate],
        ...workout,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.workouts[indexForUpdate] = updatedWorkout;
    return updatedWorkout;
};