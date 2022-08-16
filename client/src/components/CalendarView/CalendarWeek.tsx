import CalendarDay from 'components/CalendarView/CalendarDay';
import {Week} from 'types/Week';
import styled from 'styled-components';

interface CalendarWeekProps {
    week: Week
}

const CalendarWeekStyles = styled.div`
    display: flex;
  flex-direction: column;
  
    .lesson-grid{
        display: flex;
        flex-direction: row;
    }
`

const CalendarWeek = ({week}: CalendarWeekProps) => {
    return (
        <CalendarWeekStyles>
            <h1>{week.month}</h1>
            <div>Week {week.dateRange}</div>
            <div className="lesson-grid">
                {week && week.days.map((day) => (
                        <CalendarDay key={day.day} day={day}/>
                    ))}
            </div>




        </CalendarWeekStyles>
    )
}

export default CalendarWeek