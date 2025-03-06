import mongoose, { Document } from "mongoose";

export interface Jobs extends Document {
  id: mongoose.Types.ObjectId;
  title: string;
  description: string;
  status: "active" | "inactive";
  createdAt?: Date;
  updatedAt?: Date;
}
