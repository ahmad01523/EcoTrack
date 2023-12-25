import { auth } from "../../Middleware/auth.js";
import * as susScore from "./SustainabilityScore.controller.js";
import express  from "express";

const app = express()


app.get("/getScore",auth,susScore.getScore);

export default app;