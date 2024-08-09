import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import { userModel } from "../model.js";
import {
  GOOGLE_CALLBACK,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "../../utils/secrets.js";

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK,
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await userModel.findOne({ googleID: profile.id });

      if (!user) {
        const newUser = await userModel.create({
          username: profile.displayName,
          googleID: profile.id,
          email: profile.emails?.[0].value,
        });

        if (newUser) {
          return done(null, newUser);
        }
      }
      return done(null, user);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  done(null, user);
});
