import { Document, InferSchemaType, model, Schema } from "mongoose";

const lessonSchema = new Schema({
  unit: String,
  tags: [{
    type: String
  }],
  note: String,
  date: {
    type: Date,
    required: true
  },
  attachments: [{
    type: String
  }],
  schedule_id: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    reuired: true
  }
});

const Lesson = model("Lesson", lessonSchema);
export default Lesson;

// extract types
export type LessonModel = InferSchemaType<typeof lessonSchema>;
export type LessonDocument = Document & LessonModel;