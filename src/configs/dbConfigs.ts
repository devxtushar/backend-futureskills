import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || "";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connnection failed", error);
    process.exit(1);
  }
};
