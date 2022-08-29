export type WeeklyScheduleParamsType = {
    weekId: string | undefined
}

export type LessonCardType = {
<<<<<<< HEAD
    _id: string,
    color: string,
    end_time: string,
    start_time: string,
    name: string
=======
    id: string,
    subject: string,
    class: string,
    time: string
>>>>>>> e33ceee50d8a92279ec0fecc6bfbd7bdd3baa4c5
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