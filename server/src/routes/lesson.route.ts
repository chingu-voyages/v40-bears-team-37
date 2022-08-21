import express, { Router } from "express";
import { z } from "zod";
import validateRequestBody from "../utils/validateRequestBody";
import getLessonController from "../controller/getLesson.controller";
import createLessonController from "../controller/createLesson.controller";

const lessonRouter: Router = express.Router()

const expectedRequestBody = z.object({
    unit: z.string({
        invalid_type_error: "Unit field must be of type string"
    }).optional(),

    tags: z.string().array().optional(),

    note: z.string({
        invalid_type_error: "Note field must be of type string"
    }).optional(),
    
    date: z.string({
        required_error: "Date must be provided",
        invalid_type_error: "Date field must be of type date"
    }),

    attachments: z.string().array().optional(),

    schedule_id: z.string({
        invalid_type_error: "schedule_id must be of type string",
        required_error: "schedule_id must be provided"
    })
})

export type Lesson = z.infer<typeof expectedRequestBody>

lessonRouter.get("/", getLessonController)
lessonRouter.post("/", validateRequestBody(expectedRequestBody), createLessonController)

export default lessonRouter 