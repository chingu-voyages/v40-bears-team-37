import { api } from "./config";
import axios from "axios";
import { Lesson, LessonRequestBodyType } from "types/Lesson";
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
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      return ({
        success: false,
        message: `Lesson not found. ${e.message}`
      }) as GetLessonErrorType;
    } else {
      return ({
        success: false,
        message: `Lesson not found. ${e.message}`
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

type CreateLessonResponseType = CreateLessonSuccessType | CreateLessonErrorType

export const createLesson = async (payload: LessonRequestBodyType) => {
  try {
    axios.defaults.withCredentials = true
    const { data } = await axios.post<CreateLessonResponseType>(`${baseUrl}/lessons`, payload)
    return data as CreateLessonSuccessType
  }
  catch (e: any) {
    return {
      success: false,
      message: `Lesson could not be created. ${e.message}`
    } as CreateLessonErrorType
  }
}

interface UpdateLessonSuccessType {
  success: true;
  data: Lesson;
}

interface UpdateLessonErrorType {
  success: false;
  message: string;
}

type UpdateLessonResponseType = UpdateLessonErrorType | UpdateLessonSuccessType

export const updateLesson = async (payload: LessonRequestBodyType, lessonId: string) => {
  try {
    axios.defaults.withCredentials = true
    const { data } = await axios.put<UpdateLessonResponseType>(`${baseUrl}/lessons/${lessonId}`, payload)
    return data as UpdateLessonSuccessType
  } catch (e: any) {
    return {
      success: false,
      message: `Lesson could not be updated. ${e.message}`
    } as UpdateLessonErrorType
  }
}