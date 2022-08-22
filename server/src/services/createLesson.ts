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

    await lessonDoc.save();
    return lessonDoc;
  } catch (e) {
    throw new Error(e.message);
  }
}
