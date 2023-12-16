import { AlertModel } from "../../../DB/Alert.model.js";

export const getAlerts = async (req, res) => {
  const alert = await AlertModel.find();

  return res.json({ message: "success", alert });
};
export const createAlert = async (req, res) => {
  const { sensorType, location, value } = req.body;

  const alert = await AlertModel.create({
    sensorType,
    location,
    value,
    userID: req.id,
  });
  return res.json({ message: "success", alert });
};
