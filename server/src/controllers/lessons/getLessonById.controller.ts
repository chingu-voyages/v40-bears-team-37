import { Request, Response } from "express";
import { Types } from "mongoose";
import { getLessonById } from "../../services/getLessons";
import { getUserId } from "../../helpers/user";
import { massageSingleLessonNote } from "../../helpers/lessons";

export default async function (req: Request, res: Response) {
  const userId = getUserId(req);
  const { lessonId } = req.params;

  try {
    const { lesson, course } = await getLessonById(
      new Types.ObjectId(lessonId),
      userId,
    );
    const structuredLessonNote = massageSingleLessonNote(lesson, course);

    if (!structuredLessonNote) {
      return res.status(404).json({
        success: true,
        message: "Lesson not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: structuredLessonNote,
    });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
}
