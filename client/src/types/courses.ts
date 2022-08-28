export type WeeklyScheduleParamsType = {
    weekId: string | undefined
}

type LessonCard = {
    start_time: string;
    end_time: string;
    name: string
}

export type WeeklyScheduleResults = {
    week_id: number;
    start_date: number;
    end_date: number;
    prev_week_id: number;
    next_week_id: number;
    schedules: {
        day: string;
        date: number;
        lessons: LessonCard[];
    }[];
}

export type WeeklyScheduleResponseType = {
    success: boolean,
    message?: string,
    data?: WeeklyScheduleResults,
}