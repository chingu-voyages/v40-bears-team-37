import { Request, Response, NextFunction } from "express";
import updateCourseInDB from "../../services/updateCourse";
import { Types } from "mongoose";

export default async function updateCourse(req: Request, res: Response, _next: NextFunction) {
  const courseId = req.params.courseId;
  const payload = req.body;
  try {
    const updatedCourse = await updateCourseInDB(payload, new Types.ObjectId(courseId));
    return res.status(200).json({
      success: true,
      data: updatedCourse,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
}
