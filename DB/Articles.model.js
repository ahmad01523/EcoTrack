//alert Schema
import { Schema, Types, model } from "mongoose";

const ArticleSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  Article: {
    type: String,
    required: true,
  },
  ArticleTopic: {
    type: String,
    required: true,
  },
  likes: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now },
});

const ArticleModel = model("ArticleSchema", ArticleSchema);

export { ArticleModel };
