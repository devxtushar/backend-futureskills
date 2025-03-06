import { Request, Response } from "express";

export const handlePostApplication = async (req: Request, res: Response) => {
  try {
    res.send({ message: "Routes created" });
  } catch (error) {
    console.log("error coming from applying");
    res.status(500).send({
      message: "Something went wrong while applying!",
      success: false,
    });
  }
};

export const handleGetAllApplications = async (req: Request, res: Response) => {
  try {
    res.send({ message: "Routes created" });
  } catch (error) {
    console.log("error coming from get all application ");
    res.status(500).send({
      message: "Something went wrong while get all application",
      success: false,
    });
  }
};

export const handleGetOnlyApplication = async (req: Request, res: Response) => {
  try {
    res.send({ message: "Routes created" });
  } catch (error) {
    console.log("error coming from get only application");
    res.status(500).send({
      message: "Something went wrong while get only application!",
      success: false,
    });
  }
};
