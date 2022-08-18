import styled from 'styled-components';
import CalendarDay from 'components/CalendarView/CalendarDay';
import {Week} from 'types/Week';
import leftArrowIcon from 'images/calendar/leftArrow.svg'
import rightArrowIcon from 'images/calendar/rightArrow.svg'

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

  .calendar-header-month {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 30px;
    height: 30px;
    background-color: var(--white);
    border-radius: 9999px;
    cursor: pointer;
  }

  h1 {
    padding-bottom: 5px;
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
                    <div className="calendar-header-month">
                        <h1>{week.month}</h1>
                        <img src={leftArrowIcon} alt={`back-arrow`}/>
                        <img src={rightArrowIcon} alt={`forward-arrow`}/>
                    </div>

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