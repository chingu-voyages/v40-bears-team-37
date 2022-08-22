import { Request, Response } from "express";
import {
  filterActiveWeekLessons,
  getFirstAndLastDayOfTheWeek,
  massageWeeklyScheduleData,
  WeekDays,
} from "../../helpers/weeklySchedule";
import { getUserId } from "../../helpers/user";
import moment from "moment";
import User from "../../models/user.model";
import Course from "../../models/course.model";

export const getWeeklySchedule = async (req: Request, res: Response) => {
  const id = getUserId(req);
  const { firstday, lastday } = getFirstAndLastDayOfTheWeek();

  // const newCourse = new Course({
  //   name: 'Mathematics',
  //   color: 'grey',
  //   start_date: 20220823,
  //   weekly_schedule: {
  //     monday: {
  //       start_time: '1000',
  //       end_time: '1230'
  //     },
  //     wednesday: {
  //       start_time: '1300',
  //       end_time: '1600'
  //     }
  //   }
  // })
  // await newCourse.save();

  try {
    const user = await User.findById(id);
    const coursesIds = user?.courses;

    if (!coursesIds || coursesIds.length <= 0) {
      return res.status(200).send({
        success: true,
        data: [],
      });
    }

    const courses = await Course.find({
      _id: { $in: coursesIds },
      start_date: { $lte: lastday },
      $or: [{ end_date: { $lte: lastday } }, { end_date: undefined }],
    });

    const filteredActiveWeekLessons = filterActiveWeekLessons(courses);
    const structuredWeekLessons = massageWeeklyScheduleData(
      filteredActiveWeekLessons
    );

    const results = Object.keys(structuredWeekLessons).map((day, index) => ({
      day,
      date: moment((firstday + index).toString()).format("MMM Do"),
      lessons: structuredWeekLessons[day as WeekDays],
    }));

    return res.status(200).send({
      success: true,
      data: results,
    });
  } catch (error) {
    res.send({
      success: true,
      data: [],
    });
  }
};
