import mongoose from "mongoose";
import { MONGO_URL } from "../env";
import Course from "../models/course.model";
import User from "../models/user.model";
import { coursesData } from "./data";
import * as readline from "readline";
import * as process from "process";
import { z } from "zod";

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fillCourses = async (email: string) => {
  console.log("Initiating script -------------------");

  for (let i = 0; i < coursesData.length; i++) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("No user found");

    console.log(`Creating courses for user:: ${user._id}`);

    const savedCourse = await Course.create(coursesData[i]);
    if (!savedCourse) throw new Error("Unable to save the course");

    user.courses.push(savedCourse.id);
    const savedCourseIdInAccount = await user.save();
    if (!savedCourseIdInAccount)
      throw new Error("Unable to save the course id in user account");

    console.log(`Courses created:: ${savedCourse}`);
  }
};

(async () => {
  rl.question(
    "Please insert the account's email that the courses should belong to \nemail:",
    async function (email: string) {
      try {
        const emailValidator = z.string().email();
        emailValidator.parse(email);

        await mongoose.connect(MONGO_URL);
        console.log("MongoDB is connected ---------------------");

        await fillCourses(email);
        console.log("Creating courses done ---------------------");

        process.exit();
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    },
  );
})();
