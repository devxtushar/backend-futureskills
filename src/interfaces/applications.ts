import mongoose, { Document } from "mongoose";

export interface Applications extends Document {
  candidateId: string;
  jobId: string;
  resumeUrl: string;
  parsedfields: Object;
  status: "Review" | "Accepted" | "Rejected";
}
