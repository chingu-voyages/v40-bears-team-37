import Lesson from "../models/lesson.model";

export default async function getLessons() {
  try {
    const lessons = await Lesson.find({});
    return lessons;
  } catch (e) {
    throw new Error("Could not find any lessons in our database.");
  }
}