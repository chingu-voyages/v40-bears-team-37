import { Types } from "mongoose";
import { logger } from "../config/logger.config";
import Lesson from "../models/lesson.model";

export async function deleteLesson(lessonId: Types.ObjectId) {
  try {
    await Lesson.findOneAndDelete({ _id: lessonId });
  } catch (error) {
    logger.error(JSON.stringify(error));
    throw new Error(
      "There's an error occured when trying to delete the lesson",
    );
  }
}
