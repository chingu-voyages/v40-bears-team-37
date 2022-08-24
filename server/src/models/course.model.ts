import { Document, InferSchemaType, model, Schema } from "mongoose";

const scheduleSchema = new Schema(
  {
    start_time: {
      type: String,
      required: true,
    },
    end_time: {
      type: String,
      required: true,
    },
  },
  {
    _id: true,
  }
);

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  start_date: {
    type: Number,
    required: true,
  },
  end_date: Number,
  color: {
    type: String,
    required: true,
  },
  weekly_schedule: {
    type: {
      monday: [scheduleSchema],
      tuesday: [scheduleSchema],
      wednesday: [scheduleSchema],
      thursday: [scheduleSchema],
      friday: [scheduleSchema],
    },
    default: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
    },
  },
});

const Course = model("Course", courseSchema);
export default Course;

// extract types
export type ScheduleModel = InferSchemaType<typeof scheduleSchema>;
export type ScheduleDocument = Document & ScheduleModel;
export type CourseModel = InferSchemaType<typeof courseSchema>;
export type CourseDocument = Document & CourseModel;
