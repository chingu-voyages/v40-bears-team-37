import { Request, Response } from "express";
import { massageLessonNotes } from "../../helpers/lessons";
import { getUserId } from "../../helpers/user";
import getLessons from "../../services/getLessons";

export default async function (req: Request, res: Response) {
  const id = getUserId(req);
  try {
    const { lessons, courses } = await getLessons(id);
    const structuredLessonNotesData = massageLessonNotes(lessons, courses);
    return res.status(200).json({
      success: true,
      data: structuredLessonNotesData,
    });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
}
