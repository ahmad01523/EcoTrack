//alert Schema
import { Schema, Types, model } from "mongoose";

const alertSchema = new Schema({
  sensorType: {
    type: String,
  },
  location: {
    type: String,
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  value: {
    type: Number,
    required: true,
  },
  thresholdForme: {
    type: String,
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
});

const AlertModel = model("alertSchema", alertSchema);

export { AlertModel };