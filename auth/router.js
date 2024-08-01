import express from "express";
import passport from "passport";

export const loginRouter = express.Router();

loginRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

loginRouter.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });

  req.session.destroy(function () {
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
});

/* loginRouter.get("/login", (req, res) => {
  req.login(user, function (err) {
    if (err) {
      return next(err);
    }
    return res.redirect("/posts");
  });
}); */

loginRouter.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/" }),

  (req, res) => {
    req.session.destroy();

    res.redirect("/posts");
  }
);
