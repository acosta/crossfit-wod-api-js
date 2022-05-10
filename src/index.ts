import express, { Application, Request, Response } from "express";

const app:Application = express();
const PORT = process.env.PORT || 3000;

// For testing purposes
app.get("/", (req:Request, res:Response):void => {
    res.send("<h2>It's Working!</h2>");
});

app.listen(PORT, ():void => {
    console.log(`API is listening on port ${PORT}`);
});