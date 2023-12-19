import { SensorDataModel } from "../../../DB/SenserData.model.js";
export const createSensorValue = async (req, res) => {
  // const {location} = req.body;
  const { value, location, sensorType } = req.body;

  const Sensor = await SensorDataModel.create({ value, location, sensorType });

  return res.json({ message: "success", Sensor });
};
export const updateSensorValue = async (req, res) => {
  const { value, location, sensorType } = req.body;

  try {
    // Try to find an existing document with the given location and sensorType
    const existingSensor = await SensorDataModel.findOne({
      location,
      sensorType,
    });

    if (existingSensor) {
      // If the document exists, update its value and timestamp
      existingSensor.value = value;
      existingSensor.timestamp = new Date(); // Update timestamp to the current time
      await existingSensor.save();

      return res.json({ message: "success", Sensor: existingSensor });
    } else {
      // If the document does not exist, create a new one
      const newSensor = await SensorDataModel.create({
        value,
        location,
        sensorType,
      });

      return res.json({ message: "success", Sensor: newSensor });
    }
  } catch (error) {
    console.error("Error creating/updating sensor value:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
