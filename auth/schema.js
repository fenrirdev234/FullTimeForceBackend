import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  googleID: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
