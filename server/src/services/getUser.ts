import { Types } from "mongoose";
import { logger } from "../config/logger.config";
import User from "../models/user.model";

export default async function getUser(userId: Types.ObjectId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      return Promise.resolve(null);
    }
    return user;
  } catch (e) {
    logger.error(JSON.stringify(e));
    throw new Error(e.message);
  }
}
