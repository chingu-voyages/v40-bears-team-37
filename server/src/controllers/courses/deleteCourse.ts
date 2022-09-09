import { Request, Response } from "express";
import { Types } from "mongoose";
import Lesson from "../../models/lesson.model";
import Course from "../../models/course.model";
import { getUserId } from "../../helpers/user";
import User from "../../models/user.model";

export default async function deleteCourseById(req: Request, res: Response) {
  const courseId = req.params.courseId;
  const userId = getUserId(req);

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send({
      success: false,
      message: "User not found",
    });
  }

  const course = await Course.findById(new Types.ObjectId(courseId));
  if (!course) {
    return res.status(404).send({
      success: false,
      message: "Course not found",
    });
  }

  try {
    await Course.findByIdAndDelete(course._id);
    await Lesson.deleteMany({ course_id: course._id });

    user.courses = user.courses.filter(
      (courseId) => courseId.toString() !== course.id,
    );
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Course and lessons related to the courses successfully deleted",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
}
