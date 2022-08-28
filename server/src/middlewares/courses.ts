import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import getCourse from "../services/getCourse";
import { getUserId } from "../helpers/user";
import getUser from "../services/getUser";
import User from "../models/user.model";

export default async function isAuthorizedToModifyCourse(req: Request, res: Response, next: NextFunction) {
    const courseId = req.params.courseId

    try {
        const course = await getCourse(new Types.ObjectId(courseId))
        if (!course) {
            return res.status(400).json({
                success: false,
                message: "The course you're trying to update dos not exist."
            })
        }

        const userId = getUserId(req)
        const user = await getUser(userId)
        if (user === null) {
            return res.status(401).json({
                success: false,
                message: "You do not have the authorization to modify this course. Please log in."
            })
        }

        const userWhichOwnsCourse = await User.findOne({ courses: courseId})
        if (userWhichOwnsCourse === null) {
            return res.status(400).json({
                success: false,
                message: "This course does not belong to a user." 
            })
        }
        if (!userWhichOwnsCourse._id.equals(userId)) {
            return res.status(401).json({
                success: false,
                message: "You are not the owner of this course. Access denied."
            })
        }

        next()

    } catch(e) {
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}