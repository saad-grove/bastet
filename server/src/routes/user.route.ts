import { Router } from "express";
import * as userController from "../controllers/user.controller";

const userRouter = Router();

userRouter.post(
  "/auth/register/vet",
  userController.registerVeterinaryController
);
userRouter.post(
  "/auth/register/cust",
  userController.registerCustomerController
);

userRouter.get("/vet/all", userController.getAllVeterinaryController);

export default userRouter;
