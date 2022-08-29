import CalendarDay from "components/CalendarView/CalendarDay";
import { WeeklyScheduleResultsType } from "types/courses";
import { CalendarWeekStyles } from "styles/CalendarWeekStyles";

import leftArrowIcon from "images/calendar/leftArrow.svg";
import rightArrowIcon from "images/calendar/rightArrow.svg";

interface CalendarWeekProps {
  week: WeeklyScheduleResultsType;
}

const CalendarWeek = ({ week }: CalendarWeekProps) => {
  const month = extractMonth(week.start_date);
  const dateRange = concatDateRange(week.start_date, week.end_date);

  return (
    <CalendarWeekStyles>
      <div className="calendar-header">
        <div>
          <div className="calendar-header-month">
            <h1>{month}</h1>
            <img src={leftArrowIcon} alt={`back-arrow`} />
            <img src={rightArrowIcon} alt={`forward-arrow`} />
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
