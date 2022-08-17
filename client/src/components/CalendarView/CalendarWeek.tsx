import CalendarDay from 'components/CalendarView/CalendarDay';
import {Week} from 'types/Week';
import styled from 'styled-components';

interface CalendarWeekProps {
    week: Week
}

const CalendarWeekStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  .calendar-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .lesson-grid {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`

const CalendarWeek = ({week}: CalendarWeekProps) => {
    return (
        <CalendarWeekStyles>
            <div className="calendar-header">
                <div>
                    <h1>{week.month}</h1>
                    <div>Week {week.dateRange}</div>
                </div>
                <div>
                    <button>Add Lesson</button>
                </div>
            </div>


            <div className="lesson-grid">
                {week && week.days.map((day) => (
                    <CalendarDay key={day.day} day={day}/>
                ))}
            </div>


        </CalendarWeekStyles>
    )
}

export default CalendarWeek