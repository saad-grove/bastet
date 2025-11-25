import { Router } from "express";
import * as userController from "../controllers/user.controller";

const userRouter = Router();

userRouter.post(
  "/auth/register/vet",
  userController.registerVeterinaryController
);

export default userRouter;
