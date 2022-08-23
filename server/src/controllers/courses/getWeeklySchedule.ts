import { Request, Response } from "express";
import {
  filterActiveWeekLessons,
  getLastOrNextWeekId,
  getWeekDates,
  massageWeeklyScheduleData,
  WeekDays,
} from "../../helpers/weeklySchedule";
import { getUserId } from "../../helpers/user";
import moment from "moment";
import User from "../../models/user.model";
import Course, { CourseDocument } from "../../models/course.model";
import { WeeklyScheduleQueryType } from "../../validators/courses";

export const getWeeklySchedule = async (req: Request, res: Response) => {
  const id = getUserId(req);

  const { weekId } = req.query as WeeklyScheduleQueryType;
  const week = getWeekDates(weekId);
  const { lastWeekId, nextWeekId } = getLastOrNextWeekId(weekId);

  try {
    const user = await User.findById(id);
    const coursesIds = user?.courses;

    let courses: CourseDocument[] = [];
    if (coursesIds && coursesIds.length > 0) {
      courses = await Course.find({
        _id: { $in: coursesIds },
        start_date: { $lte: Number(week[6]) },
      });
    }

    const filteredActiveWeekLessons = filterActiveWeekLessons(courses);
    const structuredWeekLessons = massageWeeklyScheduleData(
      filteredActiveWeekLessons
    );

    const results = {
      weekId: Number(week[1]),
      month: moment(week[1]).format("MMMM"),
      year: moment(week[1]).format("YYYY"),
      startDate: moment(week[0]).format("Do"),
      endDate: moment(week[6]).format("Do"),
      prevWeekId: Number(lastWeekId),
      nextWeekId: Number(nextWeekId),
      schedules: Object.keys(structuredWeekLessons).map((day, index) => ({
        day,
        dateLabel: moment(week[index + 1]).format("MMMM Do"),
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
