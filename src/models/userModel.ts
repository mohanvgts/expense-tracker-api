import { Document, Schema, model } from "mongoose";
import { UserModelType } from "../contracts/user";

const userModelSchema = new Schema<UserModelType & Document>({
  firstName: { type: String, require: [true, "FirstName is Required"] },
  lastName: { type: String, require: [true, "LastName is Required"] },
  email: { type: String, require: [true, "Email is Required"], unique: true },
  phone: {
    type: String,
    require: [true, "Phone Number is Required"],
    unique: true,
  },
  password: { type: String, require: [true, "Password is Required"] },
  createdAt: { type: Date, default: () => new Date() },
});

export const User = model<UserModelType & Document>("userCollections", userModelSchema);
