import { Request, Response } from "express";
import { getLessonById } from "../../services/getLessons";
import { getUserId } from "../../helpers/user";
import { Types } from "mongoose";
import { deleteLesson } from "../../services/deleteLesson";

export default async function (req: Request, res: Response) {
  const userId = getUserId(req);
  const { lessonId } = req.params;

  try {
    const { lesson } = await getLessonById(
      new Types.ObjectId(lessonId),
      userId
    );
    await deleteLesson(lesson._id);
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
}
