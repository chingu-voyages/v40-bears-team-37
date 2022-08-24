import { Document, InferSchemaType, model, Schema } from "mongoose";

const lessonSchema = new Schema({
  unit: String,
  tags: [String],
  note: String,
  date: {
    type: Number,
    required: true,
  },
  attachments: [String],
  schedule_id: {
    type: Schema.Types.ObjectId,
  },
  course_id: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
});

const Lesson = model("Lesson", lessonSchema);
export default Lesson;

// extract types
export type LessonModel = InferSchemaType<typeof lessonSchema>;
export type LessonDocument = Document & LessonModel;
