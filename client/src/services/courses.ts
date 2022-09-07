import axios from "axios";

import {
  WeeklyScheduleParamsType,
  WeeklyScheduleResponseType,
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
