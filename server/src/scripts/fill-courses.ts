import mongoose from "mongoose";
import { MONGO_URL } from "../env";
import Course from "../models/course.model";
import User from "../models/user.model";
import { coursesData } from "./data";

/**
 * Please fill-up the user's email before running the script
 * This script should be run once (per account)
 */
const email = "YOUR_EMAIL_HERE";

const fillCourses = async () => {
  mongoose.connect(MONGO_URL).then(async () => {
    console.log("MongoDB is connected ------------------");
    console.log("Initiating script -------------------");

    for (let courseData of coursesData) {
      try {
        const user = await User.findOne({ email });
        if (!user) throw new Error("No user found");

        console.log(`Creating courses for user:: ${user._id}`);

        const course = new Course(courseData);

        const savedCourse = await course.save();
        if (!savedCourse) throw new Error("Unable to save the course");

        user.courses.push(savedCourse.id);

        console.log(`Courses created:: ${savedCourse}`);

        await user.save();
      } catch (error) {
        throw new Error(error);
      }
    }
  });
};

fillCourses(); // SOME_EMAIL ==> should pass the account's email
