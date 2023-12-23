//Article router
import express from "express";
const app = express();
import { auth } from "../../Middleware/auth.js";

import * as Articles from "./Articles.controller.js";

app.get("/getArticles", Articles.getArticles);
app.post("/addArticle", auth, Articles.addArticle);
app.get("/getArticlesID", auth, Articles.getArticlesID);

app.put("/editArticle", auth, Articles.editArticle);

export default app;
