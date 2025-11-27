import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { envConfig } from "../config/env.config";
import userModel from "../models/user.model";

interface CustomPayload extends JwtPayload {
  userId: string;
}

export const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer", "").trim();
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, envConfig.jwtSecret) as CustomPayload;

    const user = await userModel.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: "Token is not valid" });
    }

    (req as any).user = user;
    next();
  } catch (error: any) {
    console.error("Authentication error:", error.message);
    return res.status(401).json({ message: "Token is not valid" });
  }
};
