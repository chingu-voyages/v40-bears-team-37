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
  course_id: string;
  lesson_id?: string;
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

export interface CourseHoursType {
  start_time: string;
  end_time: string;
}

export interface ScheduleType {
  day_of_week: string;
  start_time: string;
  end_time: string;
}

export interface CourseTypeBase {
  name?: string;
  color?: string;
  start_date?: string | number;
  end_date?: string | number;
}

export interface DraftCourseType extends CourseTypeBase {
  weekly_schedule?: {
    [key: string]: ScheduleType;
  };
}
export interface FinalCourseType extends CourseTypeBase {
  weekly_schedule?: {
    monday?: [CourseHoursType];
    tuesday?: [CourseHoursType];
    wednesday?: [CourseHoursType];
    thursday?: [CourseHoursType];
    friday?: [CourseHoursType];
  };
}
