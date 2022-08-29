import { Request, Response } from "express";
import { getLessonById } from "../../services/getLessons";
import { getUserId } from "../../helpers/user";
import { Types } from "mongoose";
import { UpdateLessonRequestPayloadType } from "../../validators/lessons";
import updateLesson from "../../services/updateLesson";

export default async function (req: Request, res: Response) {
  const userId = getUserId(req);
  const { lessonId } = req.params;
  const payload = req.body as UpdateLessonRequestPayloadType;

  try {
    const { lesson } = await getLessonById(
      new Types.ObjectId(lessonId),
      userId,
    );
    const result = await updateLesson(lesson, payload);
    return res.status(201).send({
      success: true,
      data: result,
    });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
}
