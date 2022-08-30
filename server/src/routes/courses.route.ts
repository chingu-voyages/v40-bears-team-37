import { Router } from "express";
import { validateRequestBody, validateRequestQuery } from "../validators";
import { getWeeklySchedule } from "../controllers/courses/getWeeklySchedule";
import { isAuthenticated } from "../middlewares/auth";
import {
  CoursePayloadValidator,
  CourseUpdatePayloadValidator,
  weeklyScheduleQueryValidator,
} from "../validators/courses";
import createCourse from "../controllers/courses/createCourse";
import updateCourse from "../controllers/courses/updateCourse";
import isAuthorizedToModifyCourse from "../middlewares/courses";

const courseRouter = Router();

courseRouter.get(
  "/weekly-schedule",
  isAuthenticated,
  validateRequestQuery(weeklyScheduleQueryValidator),
  getWeeklySchedule,
);

courseRouter.post(
  "/",
  isAuthenticated,
  validateRequestBody(CoursePayloadValidator),
  createCourse,
);

courseRouter.put(
  "/:courseId",
  isAuthenticated,
  validateRequestBody(CourseUpdatePayloadValidator),
  isAuthorizedToModifyCourse,
  updateCourse,
);

export default courseRouter;
