import express from "express";
import * as dataColl from "./DataCollection.controller.js";

const app = express();

app.post("/createSensorValue", dataColl.createSensorValue);
export default app;
