import { LessonRequestPayloadType } from "../validators/lessons";
import Lesson, { LessonDocument } from "../models/lesson.model";
import { Types } from "mongoose";
import { logger } from "../config/logger.config";

export default async function (lesson: LessonRequestPayloadType) {
  const { unit, note, date, attachments, schedule_id, course_id } = lesson;
  try {
    const lessonDoc: LessonDocument = new Lesson({
      unit,
      note,
      date,
      attachments,
      schedule_id: new Types.ObjectId(schedule_id),
      course_id: new Types.ObjectId(course_id),
    });

    const savedLesson = await lessonDoc.save();
    return savedLesson;
  } catch (e) {
    logger.error(JSON.stringify(e));
    throw new Error(e.message);
  }
}
