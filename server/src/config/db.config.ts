import mongoose from "mongoose";
import { envConfig } from "./env.config";

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(envConfig.dbUrl);
    console.log("Connected to DB:", conn.connection.host);
  } catch (error: any) {
    console.log("Error connecting to DB", error.message);
  }
};

export default connectToDB;
