import CalendarDay from "components/CalendarView/CalendarDay";
import { WeeklyScheduleResultsType } from "types/courses";
import { CalendarWeekStyles } from "styles/CalendarWeekStyles";

import leftArrowIcon from "images/calendar/leftArrow.svg";
import rightArrowIcon from "images/calendar/rightArrow.svg";

import { concatDateRange, extractMonth } from "utils/timeFormaters";
import { MouseEvent } from "react";

interface CalendarWeekProps {
  week: WeeklyScheduleResultsType;
  getWeeklySchedule: (weekId?: number | undefined) => Promise<void>;
}

const CalendarWeek = ({ week, getWeeklySchedule }: CalendarWeekProps) => {
  const month = extractMonth(week.start_date);
  const year = week.start_date.toString().slice(0, 4)
  const dateRange = concatDateRange(week.start_date, week.end_date);

  const handleRefetchWeeklySchedule = (e: MouseEvent<HTMLImageElement, globalThis.MouseEvent>, prevOrNext: string) => {
    e.preventDefault();
    prevOrNext === "prev" ? getWeeklySchedule(week.prev_week_id) : getWeeklySchedule(week.next_week_id)
  }

  return (
    <CalendarWeekStyles>
      <div className="calendar-header">
        <div>
          <div className="calendar-header-month">
            <h1>{month} {year}</h1>
            <img onClick={(e) => handleRefetchWeeklySchedule(e, "prev")} src={leftArrowIcon} alt={`back-arrow`} />
            <img onClick={(e) => handleRefetchWeeklySchedule(e, "next")} src={rightArrowIcon} alt={`forward-arrow`} />
          </div>
          <div>Week {dateRange}</div>
        </div>
        <div>
          <button>Add Lesson</button>
        </div>
      </div>
      <div className="lesson-grid">
        {week &&
          week.schedules.map((schedule) => <CalendarDay key={schedule.date} schedule={schedule} />)}
      </div>
    </CalendarWeekStyles>
  );
};

export default CalendarWeek;
