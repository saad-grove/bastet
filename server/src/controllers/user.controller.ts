import User from "../services/User";
import { Request, Response } from "express";

const userService = new User();

export const registerVeterinaryController = async (
  req: Request,
  res: Response
) => {
  const {
    name,
    email,
    userType,
    password,
    location,
    clinic,
    openTime,
    closeTime,
  } = req.body;

  const { pncd, cty, st, addr } = location;

  try {
    const vet = await userService.registerVeterinary(
      name,
      email,
      userType,
      password,
      { pncd, cty, st, addr },
      clinic,
      openTime,
      closeTime
    );
    res.status(201).json({ data: vet });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
