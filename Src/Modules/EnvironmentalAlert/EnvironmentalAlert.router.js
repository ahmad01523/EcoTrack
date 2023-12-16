import express from "express";
const app = express();
import * as EnvironmentalAlert from "./EnvironmentalAlert.controller.js";
import { auth } from "../../Middleware/auth.js";

app.get("/getAlerts", EnvironmentalAlert.getAlerts);
app.post("/createAlert", auth, EnvironmentalAlert.createAlert);

export default app;
