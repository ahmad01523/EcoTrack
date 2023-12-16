import userModel from "../../../DB/user.model";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  const { gender, age } = req.query;

  const users = await userModel.find({
    $or: [{ gender }, { age: { $lt: age } }],
  });

  return res.json({ message: "successes", users });
};

export const updateUser = async (req, res) => {
  try {
    const { age, gender } = req.body;

    //return res.json(decoded);

    const decoded_id = req.id;
    const user = await userModel.findOneAndUpdate(
      { _id: decoded_id },
      { age: age, gender },
      { new: true }
    ); // only updates for one row

    if (!user) {
      return res.json({ message: "not found" });
    }
    return res.json({ id, user });
  } catch (err) {
    return res.json({ message: "error has been occured", err });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findOneAndDelete(req.id);

    return res.json(user);
  } catch (err) {
    return res.json({ message: "error occured", err });
  }
};
