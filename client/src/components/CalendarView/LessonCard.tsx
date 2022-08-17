import styled from 'styled-components';
import {Lesson} from 'types/Lesson';
import {getBgColorBySubject} from 'utils/getColorBySubject';

interface LessonStyleProps {
    color: string;
}

const LessonCardStyles = styled.div<LessonStyleProps>`
  display: flex;
  flex-direction: column;
  background-color: ${p => p.color};
  font-size: 0.8rem;
  max-width: 250px;
  padding: 10px 15px;

  h1 {
    padding: 0;
    margin: 0;
    font-size: 1rem;
  }

  .card-content {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
  }

  .class-detail {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
  }



  .card-link {
    text-decoration: underline;
    align-self: flex-end;
    padding-top: 20px;
  }
`

interface LessonCardProps {
    lesson: Lesson
}



const LessonCard = ({lesson}: LessonCardProps) => {
    return (
        <LessonCardStyles color={getBgColorBySubject(lesson.subject)}>
            <h1>{lesson.subject}</h1>
            <div className="card-content">
                <div className="class-detail">
                    <div>Class: {lesson.class}</div>
                    <div className="time">{lesson.time}</div>
                </div>
                <div className="card-link">
                    <a>See Full</a>
                </div>
            </div>

        </LessonCardStyles>
    )
}

export default LessonCard