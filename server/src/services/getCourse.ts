import { Types } from "mongoose";
import { logger } from "../config/logger.config";
import Course from "../models/course.model";

export default async function getCourse(id: Types.ObjectId) {
  try {
    const course = await Course.findById(id);
    return course;
  } catch (e) {
    logger.error(JSON.stringify(e));
    throw new Error(e.message);
  }
}
