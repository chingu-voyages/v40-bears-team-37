import { Request, Response } from "express";
import { massageSingleLessonNote } from "../../helpers/lessons";
import Course, { CourseDocument } from "../../models/course.model";
import createLesson from "../../services/createLesson";
import Lesson, { LessonDocument } from "../../models/lesson.model";
import { LessonRequestPayloadType } from "../../validators/lessons";
import { Types } from "mongoose";
import { logger } from "../../config/logger.config";

export default async function (req: Request, res: Response) {
  const { course_id, schedule_id, date } = req.body as LessonRequestPayloadType;

  const isLessonExist = await Lesson.findOne({
    course_id: new Types.ObjectId(course_id),
    schedule_id: new Types.ObjectId(schedule_id),
    date,
  });

  if (isLessonExist) {
    return res.status(400).send({
      success: true,
      message: "Lesson for the class already exist.",
    });
  }

  try {
    const body = req.body;
    const newLesson = (await createLesson(body)) as LessonDocument;
    const course = (await Course.findById(
      newLesson.course_id,
    )) as CourseDocument;
    const structuredLessonNote = massageSingleLessonNote(newLesson, course);
    res.status(201).json({
      success: true,
      data: structuredLessonNote,
    });
  } catch (e) {
    logger.error(JSON.stringify(e));
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
}
