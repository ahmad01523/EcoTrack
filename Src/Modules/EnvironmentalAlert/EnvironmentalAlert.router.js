import express from "express";
const app = express();
import * as EnvironmentalAlert from "./EnvironmentalAlert.controller.js";

app.get("/getAlert", EnvironmentalAlert.getAlert);
app.post("/createAlert", EnvironmentalAlert.createAlert);

export default app;
