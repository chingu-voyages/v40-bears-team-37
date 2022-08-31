import passport from "passport";
import bcrypt from "bcryptjs";
import User, { UserDocument } from "../models/user.model";
import { Types } from "mongoose";

const LocalStrategy = require("passport-local").Strategy;

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
  /**
   * passport expecting 'user' is instanceof Express.User rather than UserDocument
   * need to investigate further later on
   */
  const { _id } = user as UserDocument;
  done(null, _id);
});

// user object attaches to the request as req.user
passport.deserializeUser((id: Types.ObjectId, done) => {
  User.findOne({ _id: id }, (err: NativeError, user: UserDocument) => {
    if (err) {
      done(err);
    } else {
      done(null, user);
    }
  });
});

const strategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async function (
    email: string,
    password: string,
    done: (arg1: null, arg2?: false | UserDocument, arg3?: { message: string }) => void,
  ) {
    const user = await User.findOne({ email });
    if (!user) {
      return done(null, false, {
        message: "No user found!",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return done(null, false, {
        message: "Incorrect email or password.",
      });
    }
    return done(null, user);
  },
);

passport.use(strategy);

export default passport;
