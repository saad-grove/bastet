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
userRouter.get("/cust/all", userController.getAllCustomerController);

userRouter.patch(
  "/vet/approve/:vetId",
  userController.approveVeterinaryController
);
userRouter.patch(
  "/vet/disapprove/:vetId",
  userController.disapproveVeterinaryController
);

userRouter.put(
  "/vet/timing/:vetId",
  userController.updateVeterinaryTimingController
);
userRouter.put(
  "/user/location/:userId",
  userController.updateUserLocationController
);

export default userRouter;
