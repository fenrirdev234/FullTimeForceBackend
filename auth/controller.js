import { FRONTEND_REDIRECT } from "../utils/secrets.js";

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
      user: null,
      message: "required login first",
    });
  }
};

export const loginFailed = (req, res) => {
  res.status(401).json({
    success: false,
    user: null,
    message: "failure",
  });
};

export const logoutApp = (req, res) => {
  if (req.user) {
    res.clearCookie("connect.sid");
    // clear the session cookie
    req.logout(function (err) {
      // logout of passport
      req.session.destroy(function (err) {
        // destroy the session
      });
    });
    return res.status(200).json({
      success: true,
      user: null,
      message: "logging you out",
    });
  } else {
    return res.status(200).json({
      success: true,
      user: null,
      message: "no user to log out!",
    });
  }
};
