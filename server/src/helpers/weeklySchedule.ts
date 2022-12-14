import { CourseDocument } from "../models/course.model";
import moment from "moment";
import { LessonDocument } from "../models/lesson.model";
import { Types } from "mongoose";

export type WeekDays =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday";

export const getPrevOrNextWeekId = (currentDate?: string) => {
  const prevWeekId = moment(currentDate).add(-1, "week").format("yyyyMMDD");
  const nextWeekId = moment(currentDate).add(1, "week").format("yyyyMMDD");

  return { prevWeekId, nextWeekId };
};

export const getWeekDates = (currentDate?: string) => {
  const firstWeekDay = moment(currentDate).startOf("week");
  return [...Array(7)].map((_, idx) =>
    firstWeekDay.clone().add(idx, "day").format("yyyyMMDD"),
  );
};

export const filterActiveWeekLessons = (
  courses: CourseDocument[],
  dateId?: string,
) => {
  const week = getWeekDates(dateId);

  let activeCourses = [];
  for (let course of courses) {
    let courseStartDate = moment(course.start_date.toString());
    let courseEndDate = course.end_date
      ? moment(course.end_date.toString())
      : undefined;

    const isActiveOnTheDay = (currentDate: string) => {
      const current = moment(currentDate);
      return (
        current.isSameOrAfter(courseStartDate) &&
        (courseEndDate ? current.isSameOrBefore(courseEndDate) : true)
      );
    };

    activeCourses.push({
      _id: course._id,
      name: course.name,
      start_date: course.start_date,
      end_date: course.end_date,
      color: course.color,
      weekly_schedule: {
        monday: isActiveOnTheDay(week[1]) ? course.weekly_schedule.monday : [],
        tuesday: isActiveOnTheDay(week[2])
          ? course.weekly_schedule.tuesday
          : [],
        wednesday: isActiveOnTheDay(week[3])
          ? course.weekly_schedule.wednesday
          : [],
        thursday: isActiveOnTheDay(week[4])
          ? course.weekly_schedule.thursday
          : [],
        friday: isActiveOnTheDay(week[5]) ? course.weekly_schedule.friday : [],
      },
    });
  }
  return activeCourses as CourseDocument[];
};

export type LessonCard = {
  _id: Types.ObjectId;
  name: string;
  course_id: Types.ObjectId;
  color: string;
  start_time: string;
  end_time: string;
  lesson_id?: Types.ObjectId;
  unit?: string;
};

export const massageWeeklyScheduleData = (
  courses: CourseDocument[],
  lessonsData: LessonDocument[],
) => {
  const sortByTime = (daySchedules: LessonCard[]) =>
    daySchedules.sort(
      (a, b) => Number(moment(a.start_time)) - Number(moment(b.start_time)),
    );

  const lessonMapper = (day: WeekDays) => {
    let lessons: LessonCard[] = [];
    courses.forEach(
      (course) =>
        (lessons = [
          ...lessons,
          ...course.weekly_schedule[day].map((schedule) => ({
            _id: schedule._id!,
            name: course.name!,
            course_id: course._id!,
            color: course.color!,
            start_time: schedule.start_time!,
            end_time: schedule.end_time!,
            lesson_id: lessonsData.find(
              (data) => data.schedule_id?.toString() === schedule.id,
            )?._id,
            unit: lessonsData.find(
              (data) => data.schedule_id?.toString() === schedule.id,
            )?.unit,
          })),
        ]),
    );
    return lessons;
  };

  return {
    monday: sortByTime(lessonMapper("monday")),
    tuesday: sortByTime(lessonMapper("tuesday")),
    wednesday: sortByTime(lessonMapper("wednesday")),
    thursday: sortByTime(lessonMapper("thursday")),
    friday: sortByTime(lessonMapper("friday")),
  };
};
