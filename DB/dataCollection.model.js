import { Schema, model } from "mongoose";
const types = ["Temperature", "AirQuality", "Humditiy"];
const dataCollectionSchema = new Schema({
  datatype: {
    type: String,
    enum: types
  },
  value: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
  },
});




// Create models based on the schemas
const dataCollection = model("DataCollection", dataCollectionSchema);
export default dataCollection;
