import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect('mongodb://127.0.0.1:27017/ecotrack')
    .then(() => {
      console.log(`connectDB`);
    })
    .catch((err) => {
      console.log(`error connectiong to db ${err}`);
    });
};

export default connectDB;
