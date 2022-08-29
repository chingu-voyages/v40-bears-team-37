import { LessonCardStyles } from "styles/LessonCardStyles";
<<<<<<< HEAD

import { LessonCardType } from "types/courses";

import { formatTime } from "utils/timeFormaters";
=======
import { getBgColorBySubject } from "utils/getColorBySubject";
>>>>>>> e33ceee50d8a92279ec0fecc6bfbd7bdd3baa4c5

import { LessonCardType } from "types/courses";

interface LessonCardProps {
  lesson: LessonCardType;
}

const LessonCard = ({ lesson }: LessonCardProps) => {
  return (
    <LessonCardStyles color={lesson.color}>
      <div className="card-header">
        <h1>{lesson.name}</h1>
        <div>Lesson: {lesson.name}</div>
      </div>
      <div className="card-content">
        <div>{formatTime(lesson.start_time)} - {formatTime(lesson.end_time)}</div>
        {/*TODO: direct to lesson detail*/}
        <a className="card-link" href={`/lessons/${lesson._id}`}>
          See Full
        </a>
      </div>
    </LessonCardStyles>
  );
};

export default LessonCard;
