import { Types } from "mongoose";
import User from "../models/user.model";
import Lesson from "../models/lesson.model";
import Course from "../models/course.model";

export async function getLessonById(
  lessonId: Types.ObjectId,
  userId: Types.ObjectId
) {
  const lesson = await Lesson.findById(lessonId);
  if (!lesson) throw new Error("No lesson found");

  const course = await Course.findOne({ _id: lesson.course_id });
  if (!course) throw new Error("No course attached to the lesson found");

  const user = await User.find({
    _id: userId,
    courses: course._id,
  });
  if (!user) throw new Error("Unauthorized action");

  return { lesson, course };
}

export default async function getLessons(id: Types.ObjectId) {
  try {
    const user = await User.findById(id).select("courses");
    const lessons = await Lesson.find({
      courses: { $in: user?.courses },
    });

    const courseIds = lessons.map((lesson) => lesson.course_id);

    const courses = await Course.find({
      _id: { $in: courseIds },
    });
    return { lessons, courses };
  } catch (e) {
    throw new Error("Could not find any lessons in our database.");
  }
}
