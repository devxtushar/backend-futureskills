import mongoose, { Schema } from "mongoose";
import { Jobs } from "../interfaces/jobs";

const jobsSchema: Schema = new Schema(
  {
    id: { type: mongoose.Types.ObjectId, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Jobs>("fsjobs", jobsSchema);
