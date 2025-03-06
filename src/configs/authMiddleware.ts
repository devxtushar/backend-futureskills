import { verifyAccessToken } from "./manageTokens";
import { Request, Response, NextFunction } from "express";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).send({ message: "Access token is required" });
    return;
  }
  const token = authHeader.split(" ")[1];
  try {
    verifyAccessToken(token);
    next();
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
