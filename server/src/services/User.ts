import userModel from "../models/user.model";
import bcryptjs from "bcryptjs";

/*
TODO:
REGISTER VET*
REGISTER CUSTOMER*
LOGIN
UPDATE LOCATION
UPDATE TIMES
DELETE
FETCH ALL VET*
FETCH ALL CUST*
FETCH SINGLE
APPROVE
DISAPPROVE
*/

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

  public async registerCustomer(
    name: string,
    email: string,
    userType: string,
    location: {
      pncd: string;
      cty: string;
      st: string;
      addr: string;
    },
    password: string
  ) {
    const existing = await userModel.findOne({ email });
    if (existing) throw new Error("Customer already exist");

    const hashedPassword = await bcryptjs.hash(password, 10);

    return await userModel.create({
      name,
      email,
      user_type: userType,
      location,
      password: hashedPassword,
    });
  }

  public async getAllCustomer() {
    return await userModel
      .find({ user_type: "Customer" })
      .sort({ createdAt: -1 })
      .select("-password");
  }

  public async getAllVeterinary() {
    return await userModel
      .find({ user_type: "Veterinary" })
      .sort({ createdAt: -1 })
      .select("-password");
  }

  public async approveVeterinary(vetId: string) {
    return await userModel.findByIdAndUpdate(vetId, { status: "Approved" });
  }

  public async disapproveVeterinary(vetId: string) {
    return await userModel.findByIdAndUpdate(vetId, { status: "Not Approved" });
  }
}

export default User;
