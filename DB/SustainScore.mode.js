import mongoose, { Schema } from "mongoose";

const sustainScoreSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  Score: {
    type: Number,
    default: 0,
  },
});

const Score = mongoose.model("Score", sustainScoreSchema);

export default Score;
