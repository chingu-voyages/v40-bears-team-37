import { Types } from "mongoose";
import { CourseDocument, ScheduleDocument } from "../models/course.model";
import { LessonDocument } from "../models/lesson.model";
import { WeekDays } from "./weeklySchedule";

interface LessonNote {
  _id: Types.ObjectId;
  course_id: Types.ObjectId;
  schedule_id: Types.ObjectId;
  course_name: string;
  start_time: string;
  end_time: string;
  color: string;
  unit?: string;
  tags?: string[];
  note?: string;
  date: number;
  attachments?: string[];
}

export const massageSingleLessonNote = (
  lesson: LessonDocument,
  course: CourseDocument,
): LessonNote | undefined => {
  let schedule = (
    Object.keys(course.weekly_schedule)
      .map((key) => course?.weekly_schedule[key as WeekDays])
      .flat() as ScheduleDocument[]
  ).find((sched) => lesson.schedule_id! === sched._id);

  if (schedule) {
    return {
      _id: lesson._id,
      course_id: lesson.course_id!,
      schedule_id: lesson.schedule_id!,
      course_name: course.name,
      start_time: schedule.start_time,
      end_time: schedule.end_time,
      color: course.color,
      unit: lesson.unit,
      tags: lesson.tags,
      note: lesson.note,
      date: lesson.date,
      attachments: lesson.attachments,
    };
  }
};

export const massageLessonNotes = (
  lessons: LessonDocument[],
  courses: CourseDocument[],
) => {
  let structuredLessonNotes: LessonNote[] = [];

  lessons.forEach((lesson) => {
    let course = courses.find((course) => lesson.course_id === course._id);
    if (course) {
      let massagedNote = massageSingleLessonNote(lesson, course);

      if (massagedNote) {
        structuredLessonNotes.push(massagedNote);
      }
    }
  });

  return structuredLessonNotes;
};
