import express, { Router } from "express";
import getLessonController from "../controller/getLesson.controller";
import createLessonController from "../controller/createLesson.controller"

const lessonRouter: Router = express.Router()

lessonRouter.get("/", getLessonController)
lessonRouter.post("/", createLessonController)

export default lessonRouter 