import { Router } from "express";
import { getWeeklySchedule } from "../controllers/courses/getWeeklySchedule";
import { isAuthenticated } from "../middlewares/auth";

const courseRouter = Router();

courseRouter.get("/weekly-schedule", isAuthenticated, getWeeklySchedule);

export default courseRouter;