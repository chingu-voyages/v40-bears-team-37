import { Request, Response } from "express";
import getLessons from "../../services/getLessons";

export default async function (_req: Request, res: Response) {
  try {
    const lesson = await getLessons();
    return res.status(200).json(lesson);
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
}
