import { Types } from "mongoose";
import User from "../models/user.model";

export default async function getUser(userId: Types.ObjectId) {
    try {
        const user = await User.findById(userId)
        if (!user) {
            return Promise.resolve(null)
        }
        return user
    } catch(e) {
        throw new Error(e.message)
    }
}