import LessonCard from "components/CalendarView/LessonCard";
import { scheduleType } from "types/courses";
import { concatMonthAndDate, dayMap } from "utils/timeFormaters";
import { CalendarDayStyles } from "styles/CalendarDayStyles";

interface CalendarDayProps {
  schedule: scheduleType;
}

const CalendarDay = ({ schedule }: CalendarDayProps) => {
  return (
    <CalendarDayStyles>
      <div className="day-header">
        <h3>{dayMap[schedule.day]}</h3>
        <small>{concatMonthAndDate(schedule.date)}</small>
      </div>

      {schedule &&
        schedule.lessons.map((lesson) => (
          <LessonCard key={lesson._id} lesson={lesson} schedule={schedule} />
        ))}
    </CalendarDayStyles>
  );
};

export default CalendarDay;
