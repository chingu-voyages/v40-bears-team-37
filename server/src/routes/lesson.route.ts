import express, { Router } from "express";
import { validateRequestBody, validateRequestQuery } from "../validators";
import getLessonController from "../controllers/lessons/getLessons.controller";
import createLessonController from "../controllers/lessons/createLesson.controller";
import {
  LessonFilterQueryValidator,
  LessonRequestPayloadValidator,
  UpdateLessonRequestPayloadValidator,
} from "../validators/lessons";
import { isAuthenticated } from "../middlewares/auth";
import getLessonById from "../controllers/lessons/getLessonById.controller";
import updateLessonController from "../controllers/lessons/updateLesson.controller";
import deleteLessonController from "../controllers/lessons/deleteLesson.controller";
import { isLessonAuthorized } from "../middlewares/lessons";

const lessonRouter: Router = express.Router();

lessonRouter
  .get(
    "/",
    isAuthenticated,
    validateRequestQuery(LessonFilterQueryValidator),
    getLessonController,
  )
  .post(
    "/",
    isAuthenticated,
    validateRequestBody(LessonRequestPayloadValidator),
    createLessonController,
  )
  .get("/:lessonId", isAuthenticated, isLessonAuthorized, getLessonById)
  .put(
    "/:lessonId",
    isAuthenticated,
    validateRequestBody(UpdateLessonRequestPayloadValidator),
    isLessonAuthorized,
    updateLessonController,
  )
  .delete(
    "/:lessonId",
    isAuthenticated,
    isLessonAuthorized,
    deleteLessonController,
  );

export default lessonRouter;
