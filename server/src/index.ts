import express, { Request, Response } from "express";
import cors from "cors";
import {
  COOKIE_SECRET,
  FRONTEND_URL,
  MONGO_URL,
  PORT,
  IS_PROD,
  COOKIE_NAME,
} from "./env";
import mongoose from "mongoose";
import helmet from "helmet";
import compression from "compression";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "./config/passport.config";
import authRouter from "./routes/auth.route";
import lessonRouter from "./routes/lesson.route";
import courseRouter from "./routes/courses.route";
import { logger } from "./config/logger.config";

// instantiate express app
const app = express();

// middlewares
app.use(
  cors({
    origin: IS_PROD ? FRONTEND_URL : "http://localhost:3000",
    credentials: true,
  }),
);
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: MONGO_URL,
    }),
    name: COOKIE_NAME,
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: IS_PROD, // SSL only in production
      maxAge: 7 * 24 * 60 * 60 * 1000, // expires in 1 week
      httpOnly: true,
      sameSite: "none",
      // domain: ''
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// Document API with Swagger if not in production
// Docs available at /api/docs
if (!IS_PROD) {
  const YAML = require("yamljs");
  const swaggerUI = require("swagger-ui-express");
  const swaggerDocument = YAML.load("./src/docs.yaml");
  app.use(
    "/api/docs",
    swaggerUI.serve,
    swaggerUI.setup(swaggerDocument, {
      swaggerOptions: { supportedSubmitMethods: [] },
    }),
  );
}

// routes
app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to Notum backend!");
});
app.use("/api/auth", authRouter);
app.use("/api/lessons", lessonRouter);
app.use("/api/courses", courseRouter);

// mongodb connection
mongoose.connect(MONGO_URL).then(() => {
  logger.info("MongoDB is running");
  app.listen(PORT, () => {
    logger.info(`Server is listening on PORT ${PORT}`);
  });
});
