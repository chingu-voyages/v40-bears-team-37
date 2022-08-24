import { Router } from "express";
import { validateRequestBody, validateRequestQuery } from "../validators";
import { getWeeklySchedule } from "../controllers/courses/getWeeklySchedule";
import { isAuthenticated } from "../middlewares/auth";
import { CoursePayloadValidator, weeklyScheduleQueryValidator } from "../validators/courses";
import createCourse from "../controllers/courses/createCourse";

const courseRouter = Router();

courseRouter.get(
  "/weekly-schedule",
  isAuthenticated,
  validateRequestQuery(weeklyScheduleQueryValidator),
  getWeeklySchedule
);

courseRouter.post(
  "/",
  isAuthenticated,
  validateRequestBody(CoursePayloadValidator),
  createCourse
)

export default courseRouter;
