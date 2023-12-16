import { AlertModel } from "../../../DB/Alert.model.js";

export const getAlert = async (req, res) => {
  // const {location} = req.body;

  const temp = await AlertModel.find().select("value location");

  return res.json({ message: "success", alert });
};
export const createAlert = async (req, res) => {
  const { sensorType, location, value } = req.body;
  const alert = await AlertModel.create({ sensorType, location, value });
  return res.json({ message: "success", alert });
};

export const alert = async (req, res) => {
  // const {location} = req.body;

  return res.json({ message: "alert success" });
};
