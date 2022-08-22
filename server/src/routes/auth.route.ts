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

const authRouter = Router();

authRouter
  .post("/login", validateRequestBody(LoginPayloadValidator), login)
  .post("/signup", validateRequestBody(SignupPayloadValidator), register, login)
  .post("/logout", isAuthenticated, logout)
  .get("/check", checkIsLoggedIn);

export default authRouter;
