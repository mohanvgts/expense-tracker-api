import mongoose from "mongoose";
import { t } from "elysia";
export type UserModelType = {
  _id?: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  createdAt?: Date;
};

export const userRegisterType = t.Object({
  firstName: t.String(),
  lastName: t.String(),
  email: t.String(),
  phone: t.String(),
  password: t.String(),
});
