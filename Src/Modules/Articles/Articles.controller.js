//this is Article
import { ArticleModel } from "../../../DB/Articles.model.js";

export const addArticle = async (req, res) => {
  const { Article, ArticleTopic } = req.body;
  const userID = req.id;
  const Articlee = await ArticleModel.create({ userID, Article, ArticleTopic });
  return res.json({ message: "success add article", Articlee });
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

export const editArticle = async (req, res) => {
  const { Article, ArticleTopic, ArticleId } = req.body;
  const userID = req.id;

  try {
    const existingArticle = await ArticleModel.findOne({
      _id: ArticleId,
      userID,
    });

    if (!existingArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    existingArticle.Article = Article;
    existingArticle.ArticleTopic = ArticleTopic;
    await existingArticle.save();

    return res.json({
      message: "Success edit article",
      updatedArticle: existingArticle,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
