import { useModal } from "../../context/LessonModalContext";
import { LessonCardStyles } from "styles/LessonCardStyles";
import { formatTime } from "utils/timeFormaters";

import { LessonCardType, scheduleType } from "types/courses";

interface LessonCardProps {
  lesson: LessonCardType;
  schedule: scheduleType;
}

const LessonCard = ({ lesson, schedule }: LessonCardProps) => {
  const { setIsModalOpen, setLessonId, setSchedule, setLessonCard } = useModal()
  function openModal() {
    setLessonCard(lesson)
    setSchedule(schedule)
    if (!lesson.lesson_id) {
      setLessonId(null)
    } else {
      setLessonId(lesson.lesson_id)
    }
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
        <div className="card-link" onClick={openModal}>
          See Full
        </div>
      </div>
    </LessonCardStyles>
  );
};

export default LessonCard;
