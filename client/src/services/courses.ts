import axios from "axios";

import {
  WeeklyScheduleParamsType,
  WeeklyScheduleResponseType,
} from "../types/courses";
import { baseUrl } from "utils/config";

export const getWeeklySchedule = async (weekId: WeeklyScheduleParamsType) => {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.get<WeeklyScheduleResponseType>(
      `${baseUrl}/courses/weekly-schedule`,
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
