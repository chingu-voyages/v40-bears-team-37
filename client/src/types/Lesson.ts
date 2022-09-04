// all types subject to changes depending on database structure

export type Lesson = {
  _id: string | null;
  course_id: string;
  schedule_id: string;
  name: string;
  start_time: string;
  end_time: string;
  color: string;
  unit: string;
  tags: string[];
  note: string;
  date: number;
  attachments: string[];
};

export type LessonRequestBodyType = {
  date: string;
  schedule_id: string;
  course_id: string;
  unit?: string;
  tags?: string[];
  note?: string;
  attachments?: string[];
}