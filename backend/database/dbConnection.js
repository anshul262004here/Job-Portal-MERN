import mongoose from "mongoose";
import { config } from "dotenv";

config({
  path: "./config/config.env",
})

const MONGO_URI = process.env.MONGO_URI

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI, {
      
    });
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;