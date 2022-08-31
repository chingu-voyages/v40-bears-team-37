import { Types } from "mongoose";
import { CourseUpdatePayloadType } from "../validators/courses";
import Course from "../models/course.model";

export default async function updateCourseInDB(payload: CourseUpdatePayloadType, courseId: Types.ObjectId) {
  try {
    const oldCourse = await Course.findById(courseId);
    if (!oldCourse) throw new Error("The course you're trying to update does not exist in the database.");

    const newCourse = await Course.findOneAndUpdate({ _id: courseId }, payload, { new: true });
    return newCourse;
  } catch (e) {
    throw new Error(e.message);
  }
}
