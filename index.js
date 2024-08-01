import express from "express";
import cors from "cors";
import passport from "passport";

import dbInit from "./db/mongo.js";
import { postRouter } from "./posts/router.js";
import { loginRouter } from "./auth/router.js";
import "./auth/middleware/google.js";

import { COOKIE_KEY, PORT } from "./utils/secrets.js";
import session from "express-session";

const app = express();

// Global Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

//session configuration
app.use(
  session({
    name: "connect.sid",
    secret: COOKIE_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

//initialize passport.js with session
app.use(passport.initialize());
app.use(passport.session());

// Routes and Middleware
app.get("/", (req, res) => {
  res.status(200).send("API is running");
});
app.use("/auth", loginRouter);
app.use("/posts", postRouter);

//Handle Errors
app.use(function (error, req, res, next) {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    },
  });
});

dbInit().then();
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
