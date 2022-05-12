import DB from "./workout_db.json";

export const getAllWorkouts = () => {
    try {
        return DB.workouts;
    } catch (error: any) {
        throw { status: 500, message: error};
    }
};

export const createNewWorkout = (newWorkout: any) => {
    try {
        const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
        if (isAlreadyAdded) {
            throw { status: 400, message: `Workout with the name '${newWorkout.name}' already exists` };
        }
        DB.workouts.push(newWorkout);
        return newWorkout;
    } catch (error: any) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

export const getWorkout = (workoutId: any) => {
    try {
        const workout = DB.workouts.find((workout) => workout.id === workoutId);
        if (!workout) {
            throw { status: 400, message: `Can't find workout with the id '${workoutId}'` };
        }
        return workout;
    } catch (error: any) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

export const deleteWorkout = (workoutId: any) => {
    try {
        const indexForDeletion = DB.workouts.findIndex((workout) => workout.id === workoutId);
        if (indexForDeletion === -1) {
            throw { status: 400, message: `Can't find workout with the id '${workoutId}'` };
        }
        DB.workouts.splice(indexForDeletion, 1);
    } catch (error: any) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

export const updateWorkout = (workoutId: any, workout: any) => {
    try {
        const indexForUpdate = DB.workouts.findIndex((workout) => workout.id === workoutId);
        if (indexForUpdate === -1) {
            throw { status: 400, message: `Can't find workout with the id '${workoutId}'` };
        }

        const updatedWorkout = {
            ...DB.workouts[indexForUpdate],
            ...workout,
            updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        };
        DB.workouts[indexForUpdate] = updatedWorkout;
        return updatedWorkout;
    } catch (error: any) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};