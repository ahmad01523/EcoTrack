import express from "express";
import * as dataColl from "./DataCollection.controller.js";

const app = express();

app.post("/createTemp", dataColl.createTemp);
app.post("/createHumd", dataColl.createHumd);
app.post("/createAirQ", dataColl.createAirQ);
app.get("/getTemp",dataColl.getTemp)
app.get("/getHumd",dataColl.getHumd)
app.get("/getAirQ",dataColl.getAirQ)


export default app;
