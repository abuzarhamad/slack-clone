import mongoose from "mongoose";
import { ENV } from "./env.js";

const Connectdb = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("mongodb is connected Successfully");
  } catch (error) {
    console.log("mongodb is connnection Failed", error);
    process.exit(1);
  }
};
export default Connectdb;
