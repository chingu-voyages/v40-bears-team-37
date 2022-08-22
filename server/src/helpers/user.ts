import { Request } from "express";
import { Types } from "mongoose";

export const getUserId = (req: Request) => {
  const user = req.user as { id: string } | undefined;

  if (!user || !user.id) {
    throw new Error("Unauthorized action");
  }
  return new Types.ObjectId(user.id);
};
