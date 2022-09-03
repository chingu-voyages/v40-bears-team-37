import { api } from "./config";
import axios from "axios";
import { Lesson } from "types/Lesson";
import { baseUrl } from "utils/config";

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
    params: { tag },
  });

interface GetLessonSuccessType {
  success: true;
  data: Lesson;
}

interface GetLessonErrorType {
  success: false;
  message: string; 
}

export type GetLessonResponseType = GetLessonSuccessType | GetLessonErrorType 

export const getLessonById = async (lessonId: string) => {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.get<GetLessonResponseType>(`${baseUrl}/lessons/${lessonId}`);
    return response.data as GetLessonSuccessType
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.error("Axios Error at `getLessonById`: ", e);
      return ({
        success: false,
        message: "Lesson not found"
      }) as GetLessonErrorType;
    } else {
      console.error("Other `getLessonById` error: ", e);
      return ({
        success: false,
        message: "Lesson not found"
    }) as GetLessonErrorType;
    }
  }
};

interface CreateLessonSuccessType {
  success: true;
  data: Lesson;
}

interface CreateLessonErrorType {
  success: false;
  message: string;  
}
