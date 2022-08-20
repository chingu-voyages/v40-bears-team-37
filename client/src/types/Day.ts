import { Lesson } from "types/Lesson";

export type Day = {
  day: string;
  date: string;
  lessons: Lesson[];
};
