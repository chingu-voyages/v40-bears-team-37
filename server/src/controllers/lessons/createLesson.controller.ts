import { Request, Response } from "express";
import createLesson from "../../services/createLesson";

export default async function (req: Request, res: Response) {
  try {
    const body = req.body;
    const newLesson = await createLesson(body);
    res.status(201).json({
      success: true,
      message: newLesson,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
}
