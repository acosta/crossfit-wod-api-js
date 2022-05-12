import express, { Application } from "express";
import bodyParser from "body-parser";

import * as workoutController from "./controllers/workoutController";

const app:Application = express();

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json())

app.get("/api/v1/workouts", workoutController.getAllWorkouts);
app.get("/api/v1/workouts/:workoutId", workoutController.getWorkout);
app.post("/api/v1/workouts", workoutController.createWorkout);
app.patch("/api/v1/workouts/:workoutId", workoutController.updateWorkout);
app.delete("/api/v1/workouts/:workoutId", workoutController.deleteWorkout);

export default app;