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
import isCourseAuthorized from "../middlewares/courses";
import getUserCourses, {
  getCoursesById,
} from "../controllers/courses/getCourses";
import deleteCourseById from "../controllers/courses/deleteCourse";

const courseRouter = Router();

courseRouter
  .get("/", isAuthenticated, getUserCourses)
  .post(
    "/",
    isAuthenticated,
    validateRequestBody(CoursePayloadValidator),
    createCourse,
  )
  .get(
    "/weekly-schedule",
    isAuthenticated,
    validateRequestQuery(weeklyScheduleQueryValidator),
    getWeeklySchedule,
  )
  .get("/:courseId", isAuthenticated, isCourseAuthorized, getCoursesById)
  .put(
    "/:courseId",
    isAuthenticated,
    validateRequestBody(CourseUpdatePayloadValidator),
    isCourseAuthorized,
    updateCourse,
  )
  .delete("/:courseId", isAuthenticated, isCourseAuthorized, deleteCourseById);

export default courseRouter;
