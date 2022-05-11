import express, { Application } from "express";

import * as workoutController from "./controllers/workoutController";

const app:Application = express();
const PORT = process.env.PORT || 3000;

app.get("/api/v1/workouts", workoutController.getAllWorkouts);
app.get("/api/v1/workouts/:workoutId", workoutController.getWorkout);
app.post("/api/v1/workouts", workoutController.createWorkout);
app.patch("/api/v1/workouts/:workoutId", workoutController.updateWorkout);
app.delete("/api/v1/workouts/:workoutId", workoutController.deleteWorkout);

app.listen(PORT, ():void => {
    console.log(`API is listening on port ${PORT}`);
});