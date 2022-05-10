import express, { Application } from "express";

import * as v1Router from "./v1/routes";

const app:Application = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1", v1Router.index);

app.listen(PORT, ():void => {
    console.log(`API is listening on port ${PORT}`);
});