import { NextFunction, Request, Response } from "express";
import passport from "passport";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import { COOKIE_NAME } from "../env";
import { SignupPayloadType } from "../validators/auth";

export const login = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("login", (err, user, info) => {
    if (err) {
      return res.status(500).send("Error occured");
    }
    if (!user) {
      return res.status(401).send(info.message);
    }
    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.status(200).send("Login successful");
    });
  })(req, res, next);
};

export const register = async (req: Request, res: Response) => {
  const { email, name, password }: SignupPayloadType = req.body;

  const isEmailExist = await User.findOne({ email });

  if (isEmailExist) {
    return res.status(400).send("Email already exist");
  }

  const isUsernameExist = await User.findOne({
    name: name.trim().toLowerCase(),
  });

  if (isUsernameExist) {
    return res.status(400).send("Name already exist");
  }

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const newUser = new User({
      name: name.trim().toLowerCase(),
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(201).send("User successfully created");
  } catch (error) {
    res.status(500).send("Unable to create user");
  }
};

export const logout = async (req: Request, res: Response) => {
  req.logout(function (err) {
    if (err) {
      res.status(500).send("Unable to logout");
    }
    res.clearCookie(COOKIE_NAME);
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send("Unable to logout");
      }

      res.status(200).send("Logout successful");
    });
  });
};
