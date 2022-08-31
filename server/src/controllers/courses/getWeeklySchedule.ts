import { Request, Response } from "express";
import {
  filterActiveWeekLessons,
  getPrevOrNextWeekId,
  getWeekDates,
  massageWeeklyScheduleData,
  WeekDays,
} from "../../helpers/weeklySchedule";
import { getUserId } from "../../helpers/user";
import User from "../../models/user.model";
import Course, { CourseDocument } from "../../models/course.model";
import { WeeklyScheduleQueryType } from "../../validators/courses";
import Lesson, { LessonDocument } from "../../models/lesson.model";

export const getWeeklySchedule = async (req: Request, res: Response) => {
  const id = getUserId(req);

  const { weekId } = req.query as WeeklyScheduleQueryType;
  const week = getWeekDates(weekId);
  const { prevWeekId, nextWeekId } = getPrevOrNextWeekId(weekId);

  try {
    const user = await User.findById(id).select("courses");
    const coursesIds = user?.courses;

    let courses: CourseDocument[] = [];
    let lessons: LessonDocument[] = [];
    if (coursesIds && coursesIds.length > 0) {
      courses = await Course.find({
        _id: { $in: coursesIds },
        start_date: { $lte: Number(week[6]) },
      });
      lessons = await Lesson.find({
        course_id: { $in: coursesIds },
        $and: [{ date: { $lte: Number(week[6]) } }, { date: { $gte: Number(week[0]) } }],
      });
    }

    const filteredActiveWeekLessons = filterActiveWeekLessons(courses, weekId);
    const structuredWeekLessons = massageWeeklyScheduleData(filteredActiveWeekLessons, lessons);

    const results = {
      week_id: Number(week[1]),
      start_date: Number(week[0]),
      end_date: Number(week[6]),
      prev_week_id: Number(prevWeekId),
      next_week_id: Number(nextWeekId),
      schedules: Object.keys(structuredWeekLessons).map((day, index) => ({
        day,
        date: Number(week[index + 1]),
        lessons: structuredWeekLessons[day as WeekDays],
      })),
    };

    return res.status(200).send({
      success: true,
      data: results,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Unable to get the weekly schedule",
    });
  }
};
