import { LessonRequestPayloadType } from "../validators/lessons";
import Lesson, { LessonDocument } from "../models/lesson.model";

export default async function (lesson: LessonRequestPayloadType) {
  try {
    const lessonDoc: LessonDocument = new Lesson({
      unit: lesson.unit,
      note: lesson.note,
      date: lesson.date ?? Date.now(),
      attachments: lesson.attachments,
      schedule_id: lesson.schedule_id,
    });

    const savedLesson = await lessonDoc.save();
    return savedLesson;
  } catch (e) {
    throw new Error(e.message);
  }
}
