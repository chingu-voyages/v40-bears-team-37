export type WeeklyScheduleParamsType = {
  weekId: number | undefined;
};

// TODO: change the type if needed according to the feting data from DB
export type LessonCardType = {
  _id: string;
  color: string;
  end_time: string;
  start_time: string;
  name: string;
};

export type scheduleType = {
  day: string;
  date: number;
  lessons: LessonCardType[];
};

export type WeeklyScheduleResultsType = {
  week_id: number;
  start_date: number;
  end_date: number;
  prev_week_id: number;
  next_week_id: number;
  schedules: scheduleType[];
};

export type WeeklyScheduleResponseType = {
  success: boolean;
  message?: string;
  data?: WeeklyScheduleResultsType;
};
