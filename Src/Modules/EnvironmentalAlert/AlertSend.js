import { AlertModel } from "../../../DB/Alert.model.js";
import { SensorDataModel } from "../../../DB/SenserData.model.js";
import userModel from "../../../DB/user.model.js";

export const updateSensorValues = async () => {
  try {
    const alerts = await AlertModel.find();
    const Sensors = await SensorDataModel.find();
    for (const alert of alerts) {
      const user = await userModel.findById(alert.userID);
      const thresholdForme = alert.thresholdForme;
      const [operator, valueStr] = thresholdForme.split(" ");
      const value = parseInt(valueStr, 10);

      const sensorsForAlert = Sensors.filter(
        (sensor) =>
          sensor.location === alert.location &&
          sensor.sensorType === alert.sensorType &&
          sensor.value > value
      );
      if (sensorsForAlert.length > 0) {
        ////// send Email
        console.log(`sending Email for: ${user.email}`);
        //////
        console.log(`Alert user ID: ${user.userName}`);
        console.log({ message: "alerts", sensorsForAlert });
      }
    }
    // console.log({ message: "success", alert });
  } catch (error) {
    console.error("Error updating sensor values:", error);
  }
};
const updateInterval = 10 * 1000; // 5 minutes in milliseconds
setInterval(updateSensorValues, updateInterval);
// Set up an interval to run the update function every 5 minutes (300,000 milliseconds)
