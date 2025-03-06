import mongoose, { Schema } from "mongoose";
import { User } from "../interfaces/user";

const userSchema: Schema = new Schema(
  {
    role: {
      type: String,
      enum: ["recruiter", "candidate"],
      default: "candidate",
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const userModel = mongoose.model<User>("fsuser", userSchema);
