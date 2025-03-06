import { Request, Response } from "express";
import dotenv from "dotenv";
import { applicationModel } from "../models/applicationModel";
dotenv.config();

export const handlePostApplication = async (req: Request, res: Response) => {
  try {
    const { resumeUrl, candidateId, jobId } = req.body;
    if (!resumeUrl || !candidateId || !jobId) {
      res.status(400).send({ message: "Fields are missing!", success: true });
      return;
    } else {
      var headers = new Headers();
      headers.append("apikey", process.env.PARSE_RESUMEAPI || "");

      var requestOptions: RequestInit = {
        method: "GET",
        headers,
        redirect: "follow",
      };
      const url = `${process.env.API_URL}?url=${encodeURIComponent(resumeUrl)}`;
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const parseFields = await response.json();

      console.log(parseFields, "parseFields");

      const fields = {
        ...req.body,
        parsedfields: parseFields,
      };

      await applicationModel.create(fields);

      res.status(200).json({
        message: "Applied Successfully",
        success: true,
      });
    }
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
    const data = await applicationModel.find();
    res.status(200).send({
      message: "Applications fetched successfully",
      success: true,
      data,
    });
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
    const { id } = req.params;
    console.log(req.params, "params");
    if (!id) {
      res.status(400).send({
        message: "Candidate Id is required*",
        success: false,
      });
      return;
    }
    const candidateId = id;
    const data = await applicationModel.find({ candidateId });
    res.status(200).send({
      message: "Your Applications fetched successfully",
      success: true,
      data,
    });
  } catch (error) {
    console.log("error coming from get only application");
    res.status(500).send({
      message: "Something went wrong while get only application!",
      success: false,
    });
  }
};
