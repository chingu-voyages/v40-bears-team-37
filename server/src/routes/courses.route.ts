import { Router } from "express";
import { validateRequestQuery } from "../validators";
import { getWeeklySchedule } from "../controllers/courses/getWeeklySchedule";
import { isAuthenticated } from "../middlewares/auth";
import { weeklyScheduleQueryValidator } from "../validators/courses";

const courseRouter = Router();

courseRouter.get(
  "/weekly-schedule",
  isAuthenticated,
  validateRequestQuery(weeklyScheduleQueryValidator),
  getWeeklySchedule
);

export default courseRouter;
