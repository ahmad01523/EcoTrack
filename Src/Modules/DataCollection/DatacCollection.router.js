import express from "express";
import * as dataColl from "./DataCollection.controller.js";
import { auth } from "../../Middleware/auth.js";

const app = express();

app.post("/createData", auth, dataColl.dataCreate);
app.get("/getData", auth, dataColl.dataGet);
app.patch("/updateData", dataColl.dataUpdate);

export default app;
