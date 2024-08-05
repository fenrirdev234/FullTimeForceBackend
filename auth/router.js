import express from "express";
import passport from "passport";
import { loginFailed, loginSuccess, logoutApp } from "./controller.js";
import { FRONTEND_REDIRECT } from "../utils/secrets.js";

export const loginRouter = express.Router();

loginRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);
loginRouter.get(
  "/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "/login/failed",
    successRedirect: FRONTEND_REDIRECT,
  })
);

loginRouter.get("/login/success", loginSuccess);

loginRouter.get("/login/failed", loginFailed);

loginRouter.get("/logout", logoutApp);
