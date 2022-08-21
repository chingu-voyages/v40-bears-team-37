import { Document, InferSchemaType, model, Schema } from "mongoose";

const scheduleSchema = new Schema({
  start_time: {
    type: String,
    required: true,
  },
  end_time: {
    type: String,
    required: true,
  },
});

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  start_date: {
    type: String,
    required: true,
  },
  end_date: String,
  weekly_schedule: {
    monday: [scheduleSchema],
    tuesday: [scheduleSchema],
    wednesday: [scheduleSchema],
    thursday: [scheduleSchema],
    friday: [scheduleSchema],
  },
});

const Course = model("Course", courseSchema);
export default Course;

// extract types
export type ScheduleModel = InferSchemaType<typeof scheduleSchema>;
export type ScheduleDocument = Document & ScheduleModel;
export type CourseModel = InferSchemaType<typeof courseSchema>;
export type CourseDocument = Document & CourseModel;