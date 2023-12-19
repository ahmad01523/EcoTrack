import { SensorDataModel } from "../../../DB/SenserData.model.js";
export const createSensorValue = async (req, res) => {
  // const {location} = req.body;
  const { value, location, sensorType } = req.body;

  const Sensor = await SensorDataModel.create({ value, location, sensorType });

  return res.json({ message: "success", Sensor });
};
