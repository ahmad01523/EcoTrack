import connectDB from "../../DB/connection.js";
import dataRouter from "./DataCollection/DatacCollection.router.js";
import authRouter from "./Auth/Auth.router.js";
import EnvironmentalAlert from "./EnvironmentalAlert/EnvironmentalAlert.router.js";
import SensorData from "./SensorData/SensorData.router.js";
import Articles from "./Articles/Articles.router.js";
import susScoreRouter  from "./SustainabilityScore/SustainabilityScore.router.js";
import communityReport from "./CommunityReporting/CommunityReporting.router.js"
// anotherPage.js
//hello

import { updateSensorValues } from "./EnvironmentalAlert/AlertSend.js";

//import userProfile from "./UserProfile/UserProfile.router.js";

const initApp = (app, express) => {
  app.use(express.json());
  connectDB();
  app.use("/auth", authRouter);
  app.use("/dataCollection", dataRouter);
  app.use("/EnvironmentalAlert", EnvironmentalAlert);
  app.use("/SensorData", SensorData);
  app.use("/Articles", Articles);
  app.use("/susScore", susScoreRouter);
  app.use("/communityReport",communityReport)
  //app.use("/userProfile", userProfile )
  app.use("*", (req, res) => {
    return res.json({ message: "Page not found" });
  });
};

export default initApp;
