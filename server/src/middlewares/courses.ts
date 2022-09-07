import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { getUserId } from "../helpers/user";
import User from "../models/user.model";

export default async function isCourseAuthorized(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const courseId = req.params.courseId;

  try {
    const userId = getUserId(req);
    const userWhoOwnsCourse = await User.findOne({
      courses: new Types.ObjectId(courseId),
      _id: userId,
    });
    if (userWhoOwnsCourse === null) {
      return res.status(401).json({
        success: false,
        message:
          "Either user does not exist or user does not have permission to modify this course.",
      });
    }
    next();
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
}
