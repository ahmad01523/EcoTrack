import connectDB from "../../DB/connection.js";
import dataRouter from "./DataCollection/DatacCollection.router.js";
import authRouter from "./Auth/Auth.router.js";
import EnvironmentalAlert from "./EnvironmentalAlert/EnvironmentalAlert.router.js";
import reportRouter from "./CommunityReporting/CommunityReporting.router.js";


const initApp = (app, express) => {
  app.use(express.json());
  connectDB();
  app.use("/auth", authRouter);
  app.use("/dataCollection", dataRouter);
  app.use("/EnvironmentalAlert", EnvironmentalAlert);
  app.use ("/communityreport",reportRouter);

  app.use("*", (req, res) => {
    return res.json({ message: "Page not found" });
  });
};

export default initApp;
