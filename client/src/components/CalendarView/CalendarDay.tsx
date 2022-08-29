import LessonCard from "components/CalendarView/LessonCard";
import styled from "styled-components";

const CalendarDayStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

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

      {day &&
        day.lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
    </CalendarDayStyles>
  );
};

export default CalendarDay;
