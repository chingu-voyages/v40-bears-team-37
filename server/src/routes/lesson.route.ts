import express, { Router } from "express";
import { validateRequestBody } from "../validators";
import getLessonController from "../controllers/lessons/getLesson.controller";
import createLessonController from "../controllers/lessons/createLesson.controller";
import { LessonRequestPayloadValidator } from "../validators/lessons";

const lessonRouter: Router = express.Router();

lessonRouter.get("/", getLessonController);
lessonRouter.post(
  "/",
  validateRequestBody(LessonRequestPayloadValidator),
  createLessonController
);

export default lessonRouter;
