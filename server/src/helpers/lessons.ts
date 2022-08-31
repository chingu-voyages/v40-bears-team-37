import { Types } from "mongoose";
import { CourseDocument } from "../models/course.model";
import { LessonDocument } from "../models/lesson.model";

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

export const massageSingleLessonNote = (lesson: LessonDocument, course: CourseDocument): LessonNote | undefined => {
  const { weekly_schedule } = course;
  const schedulesArr = [
    ...weekly_schedule.monday,
    ...weekly_schedule.tuesday,
    ...weekly_schedule.wednesday,
    ...weekly_schedule.thursday,
    ...weekly_schedule.friday,
  ];

  const schedule = schedulesArr.find((sched) => sched._id?.toString() === lesson.schedule_id?.toString());

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

export const massageLessonNotes = (lessons: LessonDocument[], courses: CourseDocument[]) => {
  let structuredLessonNotes: LessonNote[] = [];

  lessons.forEach((lesson) => {
    let course = courses.find((course) => course._id?.toString() === lesson.course_id?.toString());
    if (course) {
      let massagedNote = massageSingleLessonNote(lesson, course);

      if (massagedNote) {
        structuredLessonNotes.push(massagedNote);
      }
    }
  });

  return structuredLessonNotes;
};
