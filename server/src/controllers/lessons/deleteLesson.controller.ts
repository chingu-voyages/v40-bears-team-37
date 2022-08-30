import { Request, Response } from "express";
import { Types } from "mongoose";
import { deleteLesson } from "../../services/deleteLesson";

export default async function (req: Request, res: Response) {
  const { lessonId } = req.params;

  try {
    await deleteLesson(new Types.ObjectId(lessonId));
    return res.status(200).send({
      success: true,
      message: "Lesson deleted successfully",
    });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
}
