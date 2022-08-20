import CalendarDay from "components/CalendarView/CalendarDay";
import { Week } from "types/Week";
import { CalendarWeekStyles } from "styles/CalendarWeekStyles";
import leftArrowIcon from "images/calendar/leftArrow.svg";
import rightArrowIcon from "images/calendar/rightArrow.svg";

interface CalendarWeekProps {
  week: Week;
}

const CalendarWeek = ({ week }: CalendarWeekProps) => {
  return (
    <CalendarWeekStyles>
      <div className="calendar-header">
        <div>
          <div className="calendar-header-month">
            <h1>{week.month}</h1>
            <img src={leftArrowIcon} alt={`back-arrow`} />
            <img src={rightArrowIcon} alt={`forward-arrow`} />
          </div>
          <div>Week {week.dateRange}</div>
        </div>
        <div>
          <button>Add Lesson</button>
        </div>
      </div>
      <div className="lesson-grid">
        {week &&
          week.days.map((day) => <CalendarDay key={day.day} day={day} />)}
      </div>
    </CalendarWeekStyles>
  );
};

export default CalendarWeek;
