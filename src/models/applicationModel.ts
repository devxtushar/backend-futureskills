import mongoose, { Schema } from "mongoose";
import { Applications } from "../interfaces/applications";

const applicationSchema: Schema = new Schema(
  {
    id: { type: mongoose.Types.ObjectId, required: true, unique: true },
    candidateId: { type: String, required: true },
    jobId: { type: String, required: true },
    resumeUrl: { type: String, required: true },
    parsedfields: [
      {
        key: { type: String, default: "" },
        value: { type: String, default: "" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Applications>("fsapplication", applicationSchema);
