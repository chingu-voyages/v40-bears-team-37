import LessonCard from "components/CalendarView/LessonCard";
import styled from "styled-components";
import { scheduleType } from "types/courses";
import { concatMonthAndDate, dayMap } from "utils/timeFormaters";

const CalendarDayStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 20%;

  .day-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--primary-dark);
  }
`;

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

      {schedule && schedule.lessons.map((lesson) => <LessonCard key={lesson._id} lesson={lesson} />)}
    </CalendarDayStyles>
  );
};

export default CalendarDay;
