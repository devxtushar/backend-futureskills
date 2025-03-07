import { Request, Response } from "express";
import { userModel } from "../models/userModel";
import { comparePassword, hashPassword } from "../configs/helperFn";
import { generateAccessToken } from "../configs/manageTokens";

export const handleLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(404).send({
        message: "Email/Password is required",
        success: false,
      });
      return;
    }

    const findUser = await userModel.findOne({ email });
    if (!findUser) {
      res.status(404).send({ message: "Email not found", success: false });
    } else {
      const checkPassword = await comparePassword(password, findUser.password);
      console.log(checkPassword, "check");
      if (!checkPassword) {
        res.status(404).send({
          message: "Invalid password!",
          success: false,
        });
        return;
      }

      const payload = {
        id: findUser._id,
        role: findUser.role,
      };

      const accessToken = generateAccessToken(payload);

      res.status(200).send({
        message: "Login Successfully",
        success: true,
        accessToken,
        email: findUser.email,
        role: findUser.role,
        id: findUser._id,
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
      res.status(404).send({
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
      return;
    } else {
      const hashedPassword = await hashPassword(password);

      await userModel.create({
        ...req.body,
        password: hashedPassword,
      });

      res.status(201).send({
        message: "Registered Successfully!",
        success: true,
      });
    }
  } catch (error) {
    console.log("error coming from register", error);
    res.status(500).send({
      message: "Something went wrong while register!",
      success: false,
    });
  }
};
