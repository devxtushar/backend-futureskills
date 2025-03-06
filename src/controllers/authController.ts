import { Request, Response } from "express";

export const handleLogin = async (req: Request, res: Response) => {
  try {
    res.send({ message: "Routes created" });
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
    res.send({ message: "Routes created" });
  } catch (error) {
    console.log("error coming from register");
    res.status(500).send({
      message: "Something went wrong while register!",
      success: false,
    });
  }
};
