import DB from "./workout_db.json";

export const getAllWorkouts = () => {
    return DB.workouts;
};