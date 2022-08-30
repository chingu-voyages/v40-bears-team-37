import Lesson, { LessonDocument } from "../models/lesson.model";
import { UpdateLessonRequestPayloadType } from "../validators/lessons";

export default async function (
  prevLessonData: LessonDocument,
  newlessonData: UpdateLessonRequestPayloadType,
) {
  const { _id, date, schedule_id, course_id } = prevLessonData;
  const { attachments, note, tags, unit } = newlessonData;

  try {
    const updatedLesson = await Lesson.findOneAndUpdate(
      { _id },
      {
        unit,
        tags,
        note,
        date,
        attachments,
        schedule_id,
        course_id,
      },
      {
        new: true,
      },
    );
    return updatedLesson;
  } catch (error) {
    throw new Error("There's an error when updating the lesson");
  }
}
