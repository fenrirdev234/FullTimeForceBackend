import express from "express";
import passport from "passport";

export const loginRouter = express.Router();

loginRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);
loginRouter.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/" }),

  (req, res) => {
    res.redirect("/auth/login_check");
  }
);

loginRouter.get("/login_check", (req, res, next) => {
  if (!req.user) {
    throw new Error("User not authenticated");
  }
  res.json({ user: req.user });
});

loginRouter.get("/logout", (req, res, next) => {
  res.clearCookie("connect.sid");
  // clear the session cookie
  req.logout(function (err) {
    // logout of passport
    req.session.destroy(function (err) {
      // destroy the session
      res.json({ message: "logged out" });
    });
  });
});
