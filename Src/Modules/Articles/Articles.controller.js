import { ArticleModel } from "../../../DB/Articles.model.js";

export const addArticle = async (req, res) => {
  const { Article, ArticleTopic } = req.body;
  const userID = req.id;
  const Articlee = await ArticleModel.create({ userID, Article, ArticleTopic });
  return res.json({ message: "success", Articlee });
};

export const getArticles = async (req, res) => {
  const Articles = await ArticleModel.find();
  return res.json({ message: "success get Articles", Articles });
};

export const getArticlesID = async (req, res) => {
  const userID = req.id;
  const Articles = await ArticleModel.find({ userID });
  return res.json({ message: "success get Articles", Articles });
};
