import { Request, Response } from "express";

export const handleGetJobs = async (req: Request, res: Response) => {
  try {
    res.send({ message: "Routes created" });
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
    res.send({ message: "Routes created" });
  } catch (error) {
    console.log("error coming from posting jobs");
    res.status(500).send({
      message: "Something went wrong while posting jobs!",
      success: false,
    });
  }
};
export const handlePutJobs = async (req: Request, res: Response) => {
  try {
    res.send({ message: "Routes created" });
  } catch (error) {
    console.log("error coming from updating jobs");
    res.status(500).send({
      message: "Something went wrong while updating jobs!",
      success: false,
    });
  }
};
export const handleDeleteJobs = async (req: Request, res: Response) => {
  try {
    res.send({ message: "Routes created" });
  } catch (error) {
    console.log("error coming from deleting jobs");
    res.status(500).send({
      message: "Something went wrong while deleting jobs!",
      success: false,
    });
  }
};
