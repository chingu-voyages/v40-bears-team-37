import express, { Request, Response } from "express";
import cors from "cors";
import { COOKIE_SECRET, FRONTEND_URL, MONGO_URL, PORT, __isProd__, COOKIE_NAME } from './env';
import mongoose from "mongoose";
import helmet from "helmet";
import compression from "compression";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";

// instantiate express app
const app = express();

// middlewares
app.use(
  cors({
    origin: __isProd__ ? FRONTEND_URL : "*",
    credentials: true,
  })
);
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
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
      secure: __isProd__, // SSL only in production
      maxAge: 7 * 24 * 60 * 60 * 1000, // expires in 1 week
      httpOnly: true,
      sameSite: "lax",
      domain: __isProd__ ? FRONTEND_URL : undefined
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport.config")(passport);


app.get("/", (_req: Request, res: Response) => {
  res.send("Express and Typescript working! Welcome to Notum backend!");
});

// mongoose connection
mongoose.connect(MONGO_URL).then(() => {
  console.log("{ MongoDB is running }");
  app.listen(PORT, () => {
    console.log(`{ Server is running at http://localhost:${PORT} }`);
  });
});
