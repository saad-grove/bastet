import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    user_type: {
      type: String,
      enum: ["Veterinary", "Customer"],
      required: true,
    },
    location: {
      pncd: { type: String, required: true },
      cty: { type: String, required: true },
      st: { type: String, required: true },
      addr: { type: String, required: true },
    },
    clinic: {
      type: String,
    },
    open_time: {
      type: String,
    },
    close_time: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Approved", "Not Approved"],
      default: "Approved",
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
