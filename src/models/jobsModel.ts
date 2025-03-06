import mongoose, { Schema } from "mongoose";
import { Jobs } from "../interfaces/jobs";

const jobsSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  {
    timestamps: true,
  }
);

export const jobModel = mongoose.model<Jobs>("fsjobs", jobsSchema);
