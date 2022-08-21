import express, { Router } from "express";
import getLessonController from "../controller/getLesson.controller";

const lessonRouter: Router = express.Router()

lessonRouter.get("/", getLessonController)

export default lessonRouter 