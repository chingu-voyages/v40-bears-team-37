import { Types } from "mongoose";
import User from "../models/user.model";
import Lesson from "../models/lesson.model";
import Course from "../models/course.model";
import { logger } from "../config/logger.config";

export async function getLessonById(
  lessonId: Types.ObjectId,
  userId: Types.ObjectId,
) {
  const lesson = await Lesson.findById(lessonId);
  if (!lesson) throw new Error("No lesson found");

  const course = await Course.findById(lesson.course_id);
  if (!course) throw new Error("No course attached to the lesson found");

  const user = await User.find({
    _id: userId,
    courses: course._id,
  });
  if (!user) throw new Error("Unauthorized action");

  return { lesson, course };
}

export default async function getLessons(id: Types.ObjectId, tag?: string) {
  try {
    const user = await User.findById(id).select("courses").select("email");
    const lessons = await Lesson.find({
      course_id: { $in: user?.courses },
      ...(tag ? { tags: tag } : {}),
    });

    const courseIds = lessons.map((lesson) => lesson.course_id);

    const courses = await Course.find({
      _id: { $in: courseIds },
    });
    return { lessons, courses };
  } catch (e) {
    logger.error(JSON.stringify(e));
    throw new Error("Could not find any lessons in our database.");
  }
}
