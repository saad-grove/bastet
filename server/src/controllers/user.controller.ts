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

export const registerCustomerController = async (
  req: Request,
  res: Response
) => {
  const { name, email, userType, location, password } = req.body;

  const { pncd, cty, st, addr } = location;

  try {
    const customer = await userService.registerCustomer(
      name,
      email,
      userType,
      { pncd, cty, st, addr },
      password
    );
    res.status(201).json({ data: customer });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getAllCustomerController = async (
  _req: Request,
  res: Response
) => {
  try {
    const cust = await userService.getAllCustomer();
    res.status(200).json({ total: cust.length, data: cust });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const getAllVeterinaryController = async (
  _req: Request,
  res: Response
) => {
  try {
    const vet = await userService.getAllVeterinary();
    res.status(200).json({ total: vet.length, data: vet });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const approveVeterinaryController = async (
  req: Request,
  res: Response
) => {
  const { vetId } = req.params;

  try {
    const vet = await userService.approveVeterinary(vetId);
    res.status(200).json({ data: vet });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const disapproveVeterinaryController = async (
  req: Request,
  res: Response
) => {
  const { vetId } = req.params;

  try {
    const vet = await userService.disapproveVeterinary(vetId);
    res.status(200).json({ data: vet });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};
