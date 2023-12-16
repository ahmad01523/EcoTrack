import express from "express";
const app = express();
import * as EnvironmentalAlert from "./EnvironmentalAlert.controller.js";

app.get("/alert", EnvironmentalAlert.alert);

export default app;
