import express from "express";
import * as Reports from "./CommunityReporting.controller.js";
import { auth } from "../../Middleware/auth.js";

const app = express();

app.post("/submitreport",auth, Reports.submitReport);
app.get("/getreports", Reports.getReport)


export default app;