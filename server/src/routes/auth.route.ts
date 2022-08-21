import { Router } from "express";
import {
  login,
  logout,
  register,
  checkIsLoggedIn,
} from "../controllers/auth.controller";
import { isAuthenticated } from "../middlewares/auth";

const authRouter = Router();

authRouter
  .post("/login", login) // TODO: Pass Request Body Payload validator middleware
  .post("/signup", register) // TODO: Pass Request Body Payload validator middleware
  .post("/logout", isAuthenticated, logout)
  .get("/check", checkIsLoggedIn);

export default authRouter;
