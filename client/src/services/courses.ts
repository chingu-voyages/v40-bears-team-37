import axios from "axios";
import { baseUrl } from "utils/config";

import {
  WeeklyScheduleParamsType,
  WeeklyScheduleResponseType,
  FinalCourseType,
} from "../types/courses";
import { api } from "./config";

export const getWeeklySchedule = async (weekId: WeeklyScheduleParamsType) => {
  try {
    const response = await api.get<WeeklyScheduleResponseType>(
      `/courses/weekly-schedule`,
      {
        params: weekId,
      },
    );

    return response.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      console.error("Axios Error", e);
      return e.response?.data;
    } else {
      console.error("Other `getweeklySchedule` Errors", e);
      return {
        success: "false",
        errorMessage: "Unknown `getweeklySchedule` Error",
      };
    }
  }
};

export const addCourse = async (courseData: FinalCourseType) => {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.post(`${baseUrl}/courses`, courseData);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error("Axios Error", e);
      return e.response?.data;
    } else {
      console.error("Error while adding course", e);
      return {
        success: "false",
        errorMessage: "Unknown error while adding course",
      };
    }
  }
};
