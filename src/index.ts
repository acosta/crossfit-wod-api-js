import express, { Application } from "express";

import * as v1Workouts from "./v1/routes/workoutRoutes";

const app:Application = express();
const PORT = process.env.PORT || 3000;

app.get("/api/v1/workouts", v1Workouts.getAllWorkouts);
app.get("/api/v1/:workoutId", v1Workouts.getWorkout);
app.post("/api/v1/workouts", v1Workouts.createWorkout);
app.patch("/api/v1/:workoutId", v1Workouts.updateWorkout);
app.delete("/api/v1/:workoutId", v1Workouts.deleteWorkout);

app.listen(PORT, ():void => {
    console.log(`API is listening on port ${PORT}`);
});