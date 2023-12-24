import mongoose from "mongoose";
import { Schema } from "mongoose";
const validTypes = ["Pollution", "Deforestation", "Wildlife Endangerment"];

const reportSchema = new mongoose.Schema({
  type: { type: String, enum: validTypes },
  description: String,
  location: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  timestamp: { type: Date, default: Date.now },
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
