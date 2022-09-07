import { api } from "./config";

export interface LessonNote {
  _id: string;
  course_id: string;
  schedule_id: string;
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

export interface LessonsResponse {
  success: boolean;
  data: LessonNote[];
}

export const getLessons = (tag?: string) =>
  api.get<LessonsResponse>("/lessons", {
    params: tag,
  });
