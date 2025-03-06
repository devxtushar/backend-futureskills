import { Request, Response } from "express";
import { jobModel } from "../models/jobsModel";

export const handleGetJobs = async (req: Request, res: Response) => {
  try {
    const getJobs = await jobModel.find().select("-__v"); // select to remove _v version key
    res.status(200).send({
      message: "Job list!",
      success: true,
      getJobs,
    });
  } catch (error) {
    console.log("error coming from getting jobs");
    res.status(500).send({
      message: "Something went wrong while getting jobs!",
      success: false,
    });
  }
};
export const handlePostJobs = async (req: Request, res: Response) => {
  try {
    const job = await jobModel.create(req.body);
    res.status(201).send({
      message: "Job Created successfully",
      success: true,
      job,
    });
  } catch (error) {
    console.log("error coming from posting jobs", error);
    res.status(500).send({
      message: "Something went wrong while posting jobs!",
      success: false,
    });
  }
};

export const handlePutJobs = async (req: Request, res: Response) => {
  try {
    const { _id, ...updates } = req.body;

    const updateJob = await jobModel.findByIdAndUpdate(_id, updates, {
      runValidators: true,
    });
    if (!updateJob) {
      res
        .status(404)
        .send({ message: "Job not found, Invalid Job Id!", success: false });
      return;
    } else {
      res.status(200).send({
        message: "Job updated successfully",
        success: true,
      });
    }
  } catch (error) {
    console.log("error coming from updating jobs", error);
    res.status(500).send({
      message: "Something went wrong while updating jobs!",
      success: false,
    });
  }
};
export const handleDeleteJobs = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;

    if (!_id) {
      res.status(400).send({
        message: "Job Id is required",
        success: false,
      });
      return;
    }

    const deleteJob = await jobModel.findByIdAndDelete(_id);
    if (!deleteJob) {
      res.status(404).send({ message: "Invalid Job Id!", success: false });
      return;
    } else {
      res.status(200).send({
        message: "Job deleted successfully",
        success: true,
      });
    }
  } catch (error) {
    console.log("error coming from deleting jobs");
    res.status(500).send({
      message: "Something went wrong while deleting jobs!",
      success: false,
    });
  }
};
