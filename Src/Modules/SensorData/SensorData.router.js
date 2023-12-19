import express from "express";
import * as dataColl from "./SensorData.controller.js";

const app = express();

app.post("/createSensorValue", dataColl.createSensorValue);
app.put("/updateSensorValue", dataColl.updateSensorValue);
export default app;
