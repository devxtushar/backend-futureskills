import mongoose, { Document } from "mongoose";

export interface User extends Document {
  role: "recruiter" | "candidate";
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}
