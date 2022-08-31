import { Router } from "express";
import {
  LoginPayloadValidator,
  SignupPayloadValidator,
} from "../validators/auth";
import {
  login,
  logout,
  register,
  checkIsLoggedIn,
} from "../controllers/auth.controller";
import { isAuthenticated } from "../middlewares/auth";
import { validateRequestBody } from "../validators";
import passport from "../config/passport.config";

const authRouter = Router();

authRouter
  .post(
    "/login",
    validateRequestBody(LoginPayloadValidator),
    passport.authenticate("local"),
    login,
  )
  .post(
    "/signup",
    validateRequestBody(SignupPayloadValidator),
    register,
    passport.authenticate("local"),
    login,
  )
  .post("/logout", isAuthenticated, logout)
  .get("/check", checkIsLoggedIn);

export default authRouter;
