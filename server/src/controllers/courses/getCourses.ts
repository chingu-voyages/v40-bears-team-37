import { Request, Response } from "express";
import Course from "../../models/course.model";
import { getUserId } from "../../helpers/user";
import User from "../../models/user.model";

export default async function getUserCourses(req: Request, res: Response) {
  const userId = getUserId(req);

  const user = await User.findById(userId).select("courses");

  if (!user) {
    return res.status(404).send({
      success: false,
      message: "Unauthorized",
    });
  }

  if (!user.courses || user?.courses.length === 0) {
    return res.status(200).send({
      success: false,
      data: [],
    });
  }

  const courses = await Course.find({
    _id: { $in: user.courses },
  });

  return res.status(200).send({
    success: false,
    data: courses,
  });
}
