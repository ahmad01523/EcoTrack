import {
  AirQuality,
  Temperature,
  Humidity,
} from "../../../DB/dataCollection.model.js";

export const createTemp = async (req, res) => {
  const { value, location } = req.body;

  const temp = await Temperature.create({ value, location });

  return res.json({ message: "success", temp });
};

export const getTemp = async (req, res) => {
  // const {location} = req.body;

  const temp = await Temperature.find().select("value location");

  return res.json({ message: "success", temp });
};

export const createHumd = async (req, res) => {
  const { value, location } = req.body;

  const humd = await Humidity.create({ value, location });

  return res.json({ message: "success", humd });
};

export const getHumd = async (req, res) => {
  // const {location} = req.body;

  const humd = await Humidity.find().select("value location");

  return res.json({ message: "success", humd });
};


export const createAirQ = async (req, res) => {
  const { value, location } = req.body;

  const airq = await AirQuality.create({ value, location });

  return res.json({ message: "success", airq });
};

export const getAirQ = async (req, res) => {
  // const {location} = req.body;

  const airq = await AirQuality.find().select("value location");

  return res.json({ message: "success", airq });
};
