import mongoose from "mongoose";

export type ExpenseModelType = {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  date: Date;
  category: mongoose.Types.ObjectId;
  description: string;
  amount: Number;
  tags: mongoose.Types.ObjectId;
  paymentMethod:string
  createdAt:Date
};
