import mongoose, { Document } from "mongoose";

export interface Applications extends Document {
  id: mongoose.Types.ObjectId;
  candidateId: string;
  jobId: string;
  resumeUrl: string;
  parsedfields: {
    key: string;
    value: string;
  }[];
  status: "Review" | "Accepted" | "Rejected";
}
