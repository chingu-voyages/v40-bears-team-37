import { useModal } from "../../context/LessonModalContext";
import { LessonCardStyles } from "styles/LessonCardStyles";
import { formatTime } from "utils/timeFormaters";

import { LessonCardType } from "types/courses";

interface LessonCardProps {
  lesson: LessonCardType;
}

const LessonCard = ({ lesson }: LessonCardProps) => {
  const { setIsModalOpen, setLessonId } = useModal()
  function openModal() {
    setLessonId(lesson._id)
    setIsModalOpen(true)
  }
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
        <div className="card-link" onClick={() => setIsModalOpen(true)}>
        <div className="card-link" onClick={openModal}>
          See Full
        </div>
      </div>
      </div>
    </LessonCardStyles>
  );
};

export default LessonCard;
