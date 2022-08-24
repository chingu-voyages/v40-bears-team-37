import express, { Router } from "express";
import { validateRequestBody } from "../validators";
import getLessonController from "../controllers/lessons/getLessons.controller";
import createLessonController from "../controllers/lessons/createLesson.controller";
import { LessonRequestPayloadValidator } from "../validators/lessons";
import { isAuthenticated } from "../middlewares/auth";
import getLessonById from "../controllers/lessons/getLessonById.controller";

const lessonRouter: Router = express.Router();

lessonRouter
  .get("/", isAuthenticated, getLessonController)
  .post(
    "/",
    isAuthenticated,
    validateRequestBody(LessonRequestPayloadValidator),
    createLessonController
  )
  .get("/:lessonId", isAuthenticated, getLessonById);

export default lessonRouter;
