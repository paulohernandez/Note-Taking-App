import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const connectionString = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(`${connectionString}`);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
