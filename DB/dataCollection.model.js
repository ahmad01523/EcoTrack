import { Schema, Types, model } from "mongoose";

const AirQualitySchema = new Schema({
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
});

// Temperature Schema
const TemperatureSchema = new Schema({
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
});

// Humidity Schema
const HumiditySchema = new Schema({
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
});

// Create models based on the schemas
const AirQuality = model("AirQuality", AirQualitySchema);
const Temperature = model("Temperature", TemperatureSchema);
const Humidity = model("Humidity", HumiditySchema);

export { AirQuality, Temperature, Humidity };
