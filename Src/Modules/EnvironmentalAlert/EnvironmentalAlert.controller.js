import {
  AirQuality,
  Temperature,
  Humidity,
} from "../../../DB/dataCollection.model.js";

export const getTemp = async (req, res) => {
  // const {location} = req.body;

  const temp = await Temperature.find().select("value location");

  return res.json({ message: "success", temp });
};

export const alert = async (req, res) => {
  // const {location} = req.body;

  return res.json({ message: "alert success" });
};
