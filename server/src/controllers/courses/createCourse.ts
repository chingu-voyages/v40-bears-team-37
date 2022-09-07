import { Request, Response } from "express";
import { logger } from "../../config/logger.config";
import { getUserId } from "../../helpers/user";
import createCourseInDB from "../../services/createCourse";

export default async function createCourse(req: Request, res: Response) {
  try {
    const userId = getUserId(req);
    const newCourse = await createCourseInDB(req.body, userId);
    return res.status(201).json({
      success: true,
      data: newCourse,
    });
  } catch (e) {
    logger.error(JSON.stringify(e));
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
}
