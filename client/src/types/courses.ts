export type WeeklyScheduleParamsType = {
    weekId: string | undefined
}

export type LessonCardType = {
    id: string,
    subject: string,
    class: string,
    time: string
}

export type scheduleType = {
    day: string;
    date: number;
    lessons: LessonCardType[];
}

export type WeeklyScheduleResultsType = {
    week_id: number;
    start_date: number;
    end_date: number;
    prev_week_id: number;
    next_week_id: number;
    schedules: scheduleType[];
}

export type WeeklyScheduleResponseType = {
    success: boolean,
    message?: string,
    data?: WeeklyScheduleResultsType,
}