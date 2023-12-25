import { AlertModel } from "../../../DB/Alert.model.js";

export const getAlerts = async (req, res) => {
  const userID = req.id;

  const alert = await AlertModel.find({ userID });
  return res.json({ message: "success", alert });
};
export const createAlert = async (req, res) => {
  const { sensorType, location, thresholdForme } = req.body;
  const alert = await AlertModel.create({
    sensorType,
    location,
    thresholdForme,
    userID: req.id,
  });
  return res.json({ message: "success", alert });
};
