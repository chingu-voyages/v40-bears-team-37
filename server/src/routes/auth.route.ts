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
import { passportAuthenticate } from "../config/passport.config";

const authRouter = Router();

authRouter
  .post(
    "/login",
    validateRequestBody(LoginPayloadValidator),
    passportAuthenticate,
    login,
  )
  .post(
    "/signup",
    validateRequestBody(SignupPayloadValidator),
    register,
    passportAuthenticate,
    login,
  )
  .post("/logout", isAuthenticated, logout)
  .get("/check", checkIsLoggedIn);

export default authRouter;
