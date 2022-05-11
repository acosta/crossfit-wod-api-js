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
