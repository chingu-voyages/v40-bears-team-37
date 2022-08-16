import LessonCard from 'components/CalendarView/LessonCard';
import {Day} from 'types/Day';

interface CalendarDayProps {
    day: Day
}

const CalendarDay = ({day}:CalendarDayProps) => {
    return(
        <div>
            <div>{day.day}</div>
            {day && day.lessons.map((lesson, index) => (
                <LessonCard key={index} lesson={lesson}/>
                ))}

        </div>
    )
 }

 export default CalendarDay