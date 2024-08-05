import { FRONTEND_REDIRECT } from "../utils/secrets.js";

/* export const loginChecker = (req, res, next) => {
  if (!req.user) {
    throw new Error("User not authenticated");
  }
  res.status(200).json({ user: req.user });
}; */

export const loginSuccess = (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "success",
      user: req.user,
      //   cookies: req.cookies
    });
  } else {
    res.status(200).json({
      success: false,
      message: "required login first",
    });
  }
};

export const loginFailed = (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
};

export const logoutApp = (req, res, next) => {
  res.clearCookie("connect.sid");
  // clear the session cookie
  req.logout(function (err) {
    // logout of passport
    req.session.destroy(function (err) {
      // destroy the session
      res.json({ message: "logged out" });
    });
  });
  res.redirect(FRONTEND_REDIRECT);
};
