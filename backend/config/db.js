import mongoose from "mongoose";

export const DBconnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/taskmanager`);
    console.log("DATABASE is connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
