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

export const loginUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await userService.loginUser(email, password);
    res.status(200).json({ data: user, token: token });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getProfileController = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user._id;
    const user = await userService.getProfile(userId);
    res.status(200).json({ data: user });
  } catch (error: any) {
    console.log("Authorization failed", error.message);
    res
      .status(401)
      .json({ message: "Authorization failed", error: error.message });
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

export const updateVeterinaryTimingController = async (
  req: Request,
  res: Response
) => {
  const { vetId } = req.params;
  const { openTime, closeTime } = req.body;

  try {
    const vet = await userService.updateVeterinaryTiming(
      vetId,
      openTime,
      closeTime
    );
    res.status(200).json({ message: "Timing updated", data: vet?.name });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const updateUserLocationController = async (
  req: Request,
  res: Response
) => {
  const { userId } = req.params;
  const { location } = req.body;

  const { pncd, cty, st, addr } = location;

  try {
    const user = await userService.updateUserLocation(userId, {
      pncd,
      cty,
      st,
      addr,
    });
    res
      .status(200)
      .json({ message: "Location updated of user", data: user?.name });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const deleteUserAccountController = async (
  req: Request,
  res: Response
) => {
  const { userId } = req.params;

  try {
    const user = await userService.deleteUserAccount(userId);
    res
      .status(200)
      .json({ message: "Account deleted of user", data: user?.name });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};
