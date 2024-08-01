import express from "express";

import {
  insertPost,
  eliminatePost,
  modifyPost,
  getSpecifyPost,
  getPost,
} from "./controller.js";
import { ensureAuthenticated } from "../auth/middleware/isAuthenticate.js";

export const postRouter = express.Router();

//CRUD

//Create
postRouter.post("/", ensureAuthenticated, insertPost);

//Read all
postRouter.get("/", getPost);

//Read
postRouter.get("/:permalink", getSpecifyPost);

//Update
postRouter.patch("/:permalink", ensureAuthenticated, modifyPost);

//Update
postRouter.delete("/:permalink", ensureAuthenticated, eliminatePost);
