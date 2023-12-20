import { ArticleModel } from "../../../DB/Articles.model.js";

export const addArticle = async (req, res) => {
  return res.json({ message: "success post Article" });
};

export const getArticles = async (req, res) => {
  return res.json({ message: "success get Articles" });
};
