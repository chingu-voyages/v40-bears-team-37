import { Types } from "mongoose";
import Course from "../models/course.model";

export default async function getCourse(id: Types.ObjectId) {
    try {
        const course = await Course.findById(id)
        return course
    } catch(e) {
        throw new Error(e.message)
    }
}