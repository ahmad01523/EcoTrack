import { Schema, Types, model } from "mongoose";
import SensorTypes from "./sensorTypes.js";

const SensorDataSchema = new Schema({
  value: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
  },
  sensorType: {
    type: String, // New field to represent the type of sensor
    enum: Object.values(SensorTypes),
    required: true,
  },
});

const SensorDataModel = model("SensorData", SensorDataSchema);

export { SensorDataModel };
