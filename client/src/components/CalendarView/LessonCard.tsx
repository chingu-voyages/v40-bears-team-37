import { LessonCardStyles } from "styles/LessonCardStyles";

import { LessonCardType } from "types/courses";

import { formatTime } from "utils/timeFormaters";

interface LessonCardProps {
  lesson: LessonCardType;
}

const LessonCard = ({ lesson }: LessonCardProps) => {
  function toggleModal() {}

  return (
    <LessonCardStyles color={lesson.color}>
      <div className="card-header">
        {/*TODO: render the lessons' and course's name*/}
        <h1>{lesson.name}</h1>
        <div>Lesson: {lesson.name}</div>
      </div>
      <div className="card-content">
        <div>
          {formatTime(lesson.start_time)} - {formatTime(lesson.end_time)}
        </div>
        {/*TODO: direct to lesson detail*/}
        <div className="card-link" onClick={toggleModal}>
          See Full
        </div>
      </div>
    </LessonCardStyles>
  );
};

export default LessonCard;
