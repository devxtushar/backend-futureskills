import mongoose, { Schema } from "mongoose";
import { User } from "../interfaces/user";

const userSchema: Schema = new Schema(
  {
    role: {
      type: String,
      enum: ["recruiter", "candidate"],
      default: "candidate",
    },
    id: { type: mongoose.Types.ObjectId, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<User>("fsuser", userSchema);
