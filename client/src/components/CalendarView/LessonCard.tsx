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
  max-width: 200px;
  padding: 10px 15px;

  h1 {
    padding: 0;
    margin: 0;
    font-size: 1rem;
  }

  .card-content {
    display: flex;
    flex-direction: column;
  }


  .time-link-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 10px;
  }

  .time {
    text-align: right;
  }


  .card-link {
    text-decoration: underline;
    text-underline-offset: 2px;
    align-self: flex-end;

  }


  .card-link:hover {
    text-decoration: none;
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
                <div>Lesson: {lesson.class}</div>
                <div className="time-link-container">
                    <div className="time">{lesson.time}</div>
                    <a className="card-link" href={`/lessons/${lesson.id}`}>See Full</a>
                </div>


            </div>

        </LessonCardStyles>
    )
}

export default LessonCard