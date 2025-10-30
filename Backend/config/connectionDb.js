import mongoose from "mongoose";

export const connectionDb = async () => {
  await mongoose.connect(process.env.CONNECTION_DB)
}