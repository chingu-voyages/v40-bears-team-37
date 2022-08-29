import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import { getUserId } from "../helpers/user";
import Lesson from "../models/lesson.model";
import { Types } from "mongoose";

export const isLessonAuthorized = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { lessonId } = req.params;
  const userId = getUserId(req);

  if (!lessonId) {
    return res
      .status(400)
      .send({ success: false, message: "lessonId is required" });
  }

  const lesson = await Lesson.findById(new Types.ObjectId(lessonId)).select(
    "course_id",
  );

  if (!lesson) {
    return res.status(404).send({ success: false, message: "No lesson found" });
  }

  const isAuthorized = await User.findOne({
    _id: userId,
    courses: lesson._id,
  });

  if (!isAuthorized) {
    return res.status(401).send({ success: false, message: "Unauthorized" });
  }
  next();
};
