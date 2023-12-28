import { SensorDataModel } from "../../../DB/SenserData.model.js";
export const createSensorValue = async (req, res) => {
  try{
    const { value, location, sensorType } = req.body;

  const Sensor = await SensorDataModel.create({ value, location, sensorType });

  return res.json({ message: "success", Sensor });
  }catch(err){
    return res.json({message:"error has occured",err})
  }
  
};
export const updateSensorValue = async (req, res) => {
  const { value, location, sensorType } = req.body;

  try {
    const existingSensor = await SensorDataModel.findOne({
      location,
      sensorType,
    });

    if (existingSensor) {
      existingSensor.value = value;
      existingSensor.timestamp = new Date();
      await existingSensor.save();

      return res.json({ message: "success", Sensor: existingSensor });
    } else {
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

export const getSensorData = async (req, res) => {
  // const {location} = req.body;
  const { location } = req.params;

  const sensorData = await SensorDataModel.find({ location });

  return res.json({ message: "success", sensorData });
};
