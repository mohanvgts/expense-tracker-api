import mongoose from "mongoose";

export const connectDB = (URI: string) => {
  mongoose
    .connect(URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error(err));
};
