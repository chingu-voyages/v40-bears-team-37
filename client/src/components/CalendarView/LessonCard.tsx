import { LessonCardStyles } from "styles/LessonCardStyles";
import { getBgColorBySubject } from "utils/getColorBySubject";

import { LessonCardType } from "types/courses";

interface LessonCardProps {
  lesson: LessonCardType;
}

const LessonCard = ({ lesson }: LessonCardProps) => {
  return (
    <LessonCardStyles color={getBgColorBySubject(lesson.subject)}>
      <div className="card-header">
        <h1>{lesson.subject}</h1>
        <div>Lesson: {lesson.class}</div>
      </div>
      <div className="card-content">
        <div>{lesson.time}</div>
        <a className="card-link" href={`/lessons/${lesson.id}`}>
          See Full
        </a>
      </div>
    </LessonCardStyles>
  );
};

export default LessonCard;
