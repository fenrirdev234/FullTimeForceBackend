import { model } from "mongoose";
import { UserSchema } from "./schema.js";

export const userModel = model("user", UserSchema);
