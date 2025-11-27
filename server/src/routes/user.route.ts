import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { protectRoute } from "../middleware/protect-route";

const userRouter = Router();

userRouter.post(
  "/auth/register/vet",
  userController.registerVeterinaryController
);
userRouter.post(
  "/auth/register/cust",
  userController.registerCustomerController
);
userRouter.post("/auth/login", userController.loginUserController);

userRouter.get("/vet/all", userController.getAllVeterinaryController);
userRouter.get("/cust/all", userController.getAllCustomerController);
userRouter.get(
  "/auth/profile",
  protectRoute,
  userController.getProfileController
);

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
  "/location/:userId",
  userController.updateUserLocationController
);

userRouter.delete(
  "/delete/:userId",
  userController.deleteUserAccountController
);

export default userRouter;
