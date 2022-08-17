import LessonCard from 'components/CalendarView/LessonCard';
import {Day} from 'types/Day';
import styled from 'styled-components';

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
`

interface CalendarDayProps {
    day: Day
}

const CalendarDay = ({day}: CalendarDayProps) => {
    return (
        <CalendarDayStyles>
            <div className="day-header">
                <h3>{day.day}</h3>
                <small>{day.date}</small>
            </div>

            {day && day.lessons.map((lesson, index) => (
                <LessonCard key={index} lesson={lesson}/>
            ))}


        </CalendarDayStyles>
    )
}

export default CalendarDay