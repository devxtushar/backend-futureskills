import { Request, Response } from "express";
import { userModel } from "../models/userModel";

export const handleLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log(req.body, "body");
    if (!email || !password) {
      res.status(400).send({
        message: "Email/Password is required",
        success: false,
      });
    }

    const findUser = await userModel.find({ email, password });
    if (!findUser) {
      res
        .status(404)
        .send({ message: "Email/Password is wrong", success: false });
    } else {
      res.status(200).send({
        message: "Login Successfully",
        success: true,
      });
    }
  } catch (error) {
    console.log("error coming from login");
    res.status(500).send({
      message: "Something went wrong while login!",
      success: false,
    });
  }
};
export const handleRegister = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send({
        message: "Email/Password is required",
        success: false,
      });
    }
    const findUser = await userModel.findOne({ email });

    if (findUser) {
      res.status(404).send({
        message: "Email already registered!Login now",
        success: false,
      });
    } else {
      const createUser = await userModel.create(req.body);

      res.status(200).send({
        message: "Registered Successfully",
        success: true,
        createUser,
      });
    }
  } catch (error) {
    console.log("error coming from register");
    res.status(500).send({
      message: "Something went wrong while register!",
      success: false,
    });
  }
};
