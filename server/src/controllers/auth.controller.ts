import { NextFunction, Request, Response } from "express";
import User, { UserDocument } from "../models/user.model";
import bcrypt from "bcryptjs";
import { COOKIE_NAME } from "../env";
import { SignupPayloadType } from "../validators/auth";
import { Types } from "mongoose";

export const login = (req: Request, res: Response, next: NextFunction) => {
  const userData = req.user as UserDocument;
  req.logIn(userData, (err: unknown) => {
    if (err) return next(err);
    return res.status(200).send({
      success: true,
      message: req.body.register
        ? "User successfully registered"
        : "User successfully login",
      data: {
        id: userData._id,
        name: userData.name,
        email: userData.email,
      },
    });
  });
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, name, password }: SignupPayloadType = req.body;

  const isEmailExist = await User.findOne({ email });

  if (isEmailExist) {
    return res.status(400).send({
      success: false,
      message: "Email already exist",
    });
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
    req.body.register = true;
    next();
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Unable to create user",
    });
  }
};

export const logout = async (req: Request, res: Response) => {
  req.logout(function (err) {
    if (err) {
      res.status(500).send({
        success: false,
        message: "Unable to logout",
      });
    }
    res.clearCookie(COOKIE_NAME);
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send({
          success: false,
          message: "Unable to logout",
        });
      }

      res.status(200).send({
        success: true,
        message: "Logout successful",
      });
    });
  });
};

export const checkIsLoggedIn = async (req: Request, res: Response) => {
  const user = req.user as { id: string } | undefined;

  if (!user || !user.id) {
    return res.send({
      isLoggedIn: false,
    });
  }

  const userFound = await User.findById(new Types.ObjectId(user.id));

  return res.send({
    isLoggedIn: Boolean(userFound),
    user: userFound && {
      id: userFound._id,
      name: userFound.name,
      email: userFound.email,
    },
  });
};
