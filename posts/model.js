import { model } from "mongoose";
import { BlogPostSchema } from "./schema.js";

export const postModel = model("post", BlogPostSchema);
