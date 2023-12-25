import userModel from "../../../DB/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { userName, email, password, age, ScoreCounter } = req.body;

  var hash = bcrypt.hashSync(password, parseInt(process.env.SALTROUND));

  console.log({ userName, email, password, age });
  const user = await userModel.create({
    userName,
    email,
    password: hash,
    age,
    ScoreCounter,
  });

  //return res.json(hash);
  return res.json({ message: "success", user });
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await userModel.findOne({ email });

    if (!login) {
      return res.json({ message: "invalid  email" });
    }

    const match = bcrypt.compareSync(password, login.password);

    if (!match) {
      return res.json({ message: "invalid password" });
    }

    const token = jwt.sign({ id: login._id}, process.env.LOGINTOKEN, {
      expiresIn: 60 * 60,
    });

    console.log("hi github");
    return res.json({ message: "success", token });
  } catch (error) {
    return res.json({ message: "error catch", error });
  }
};
