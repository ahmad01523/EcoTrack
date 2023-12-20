import express from "express";
const app = express();
import * as Articles from "./Articles.controller.js";

app.get("/getArticles", Articles.getArticles);
app.post("/addArticle", Articles.addArticle);

export default app;
