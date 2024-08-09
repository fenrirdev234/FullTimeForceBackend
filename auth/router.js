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
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login/failed",
    successRedirect: `${FRONTEND_REDIRECT}`,
    keepSessionInfo: true,
  }),
  (err, req, res, next) => {
    if (err) next(err);
  }
  /* (req, res) => {
    
    res.redirect(`${FRONTEND_REDIRECT}`);
  } */
);

loginRouter.get("/login/success", loginSuccess);

loginRouter.get("/login/failed", loginFailed);

loginRouter.post("/logout", logoutApp);
