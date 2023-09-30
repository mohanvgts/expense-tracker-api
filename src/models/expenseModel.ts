import { Document, Schema, model } from "mongoose";
import { ExpenseModelType } from "../contracts/expense";

const expenseModelSchema = new Schema<ExpenseModelType & Document>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "userCollections",
    require: [true, "UserId is Required"],
  },
  date: { type: Date, require: [true, "Date is Required"] },
  amount: { type: Number, require: [true, "Amount is Required"], min: 1 },
  description: { type: String, maxlength: 250 },
  category: {
    type: Schema.Types.ObjectId,
    ref: "categoryCollections",
    require: [true, "category is Required"],
  },
  paymentMethod: { type: String },
  tags: { type: Schema.Types.ObjectId, ref: "tagsCollections" },
  createdAt: { type: Date, default: () => new Date() },
});

export const Expense = model<ExpenseModelType & Document>(
  "expenseCollections",
  expenseModelSchema
);
