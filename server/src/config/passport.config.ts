import passport, { PassportStatic } from "passport";
import bcrypt from "bcryptjs";
import User, { UserDocument } from "../models/user.model";

const LocalStrategy = require("passport-local").Strategy;

module.exports = async function (passport: PassportStatic) {
  passport.use(
    "login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (
        email: string,
        password: string,
        done: (arg1: any, arg2: any, arg3?: any) => void
      ) => {
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
      }
    )
  );
};

passport.serializeUser<any, any>((_req, user, done) => {
  done(null, user);
});

passport.deserializeUser((id, cb) => {
  User.findOne({ _id: id }, (err: NativeError, user: UserDocument) => {
    const userInformation = {
      id: user._id,
    };
    cb(err, userInformation);
  });
});
