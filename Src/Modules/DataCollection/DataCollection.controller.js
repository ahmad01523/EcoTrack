import dataCollection from "../../../DB/dataCollection.model.js";

export const dataCreate = async (req, res) => {
  const user = req.user;
  const { value, location, datatype } = req.body;

  const data = await dataCollection.create({
    value,
    location,
    datatype,
    user: user._id,
  });
  if (data) {
    user.ScoreCounter += 1;
    await user.save();
    console.log(user.ScoreCounter);
  }
  //console.log({ value, location, datatype });
  return res.json({ message: "success", data });
};

export const dataGet = async (req, res) => {
  const user = req.user;
  const data = await dataCollection
    .find({ user: user._id })
    .populate({
      path: "user",
      select: "userName -_id",
    })
    .select("value location datatype -_id");

  return res.json({ message: "success", data });
};

export const dataUpdate = async (req, res) => {
  try {
    const { value, location, datatype } = req.body;
    const data = await dataCollection.findOne({
      location,
      datatype,
    });
    if (data) {
      data.value = value;
      await data.save()
      return res.json({ message: "updated successfully", data });
    }
    return res.json({ message: "No data to update" });
  } catch (err) {
    return res.json({ message: "An error has occured" });
  }
};
