import Report from "../../../DB/report.model.js";

export const submitReport = async (req, res) => {
  try {
    const { type, description, location } = req.body;
    const report = await Report.create({
      type,
      description,
      location,
      user: req.id,
    });
    if(report){
      user.ScoreCounter +=1;
      await user.save();
    }
    res.json({ message: "reported successfully!", report });
  } catch (err) {
    console.error(err);
    res.json({ err: "Internal Service Error!" });
  }
};

export const getReport = async (req, res) => {
  try {
    const reports = await Report.find()
      .populate({
        path:'user',
        select:'userName -_id'
      })
      .select("type description location -_id")
      .sort({ timestamps: -1 });
    return res.json(reports);
  } catch (err) {
    console.error(err);
    return res.json({ err: "Internal Server Error!" });
  }
};
