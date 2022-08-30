import User, { UserDocument } from "../models/user.model";
import Course from "../models/course.model";
import { CoursePayloadType } from "../validators/courses";
import { Types } from "mongoose";

export default async function createCourseInDB(
  payload: CoursePayloadType,
  userId: Types.ObjectId
) {
  const { name, start_date, end_date, color, weekly_schedule } = payload;

  try {
    const user: UserDocument | null = await User.findOne({ _id: userId });
    if (!user)
      throw new Error(
        "Cannot find user in database. Cannot create course for this user."
      );

    const newCourse = new Course({
      name,
      start_date,
      end_date,
      color,
      weekly_schedule,
    });
    const savedCourse = await newCourse.save();

    user.courses.push(savedCourse.id);
    await user.save();

    return newCourse;
  } catch (e) {
    throw new Error(e);
  }
}
