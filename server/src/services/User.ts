import userModel from "../models/user.model";
import bcryptjs from "bcryptjs";

class User {
  public async registerVeterinary(
    name: string,
    email: string,
    userType: string,
    password: string,
    location: {
      pncd: string;
      cty: string;
      st: string;
      addr: string;
    },
    clinic: string,
    openTime: string,
    closeTime: string
  ) {
    const existing = await userModel.findOne({ email });
    if (existing) throw new Error("User account already exist");

    const status = "Not Approved";
    const hashedPassword = await bcryptjs.hash(password, 10);

    const vet = await userModel.create({
      name,
      email,
      user_type: userType,
      password: hashedPassword,
      location,
      clinic,
      open_time: openTime,
      close_time: closeTime,
      status,
    });

    return vet;
  }
}

export default User;
