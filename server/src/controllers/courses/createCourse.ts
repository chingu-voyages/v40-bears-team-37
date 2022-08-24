import { Request, Response } from "express";

export default async function createCourse(req: Request, res: Response) {
    try {
        const newCourse = await createCourseInDB(req.body)
        return res.status(200).json(newCourse)
    } catch(e) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

import Course from "../../models/course.model"
import { CoursePayloadType } from "../../validators/courses"

async function createCourseInDB(body: CoursePayloadType) {
    try {
        const newCourse = new Course({
            name: body.name,
            start_date: body.start_date,
            end_date: body.end_date,
            color: body.color,
            weekly_schedule: body.weekly_schedule
        })
        await newCourse.save()
        return newCourse
    } catch(e) {
        throw new Error(e)
    }
}