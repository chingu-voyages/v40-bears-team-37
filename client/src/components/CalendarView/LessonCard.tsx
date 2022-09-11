import { useModal } from "../../context/LessonModalContext";
import { LessonCardStyles } from "styles/LessonCardStyles";
import { formatTime } from "utils/timeFormaters";

import { LessonCardType } from "types/courses";
import { Lesson } from "types/Lesson";

const LessonCard = ({
  lessonCard,
  date,
  fullLesson,
}: {
  lessonCard?: LessonCardType;
  date?: number;
  fullLesson?: Lesson;
}) => {
  const {
    setIsModalOpen,
    setLessonCard,
    setDate,
    setFullLesson,
    setDoesLessonAlreadyExist,
  } = useModal();

  function openModal() {
    if (fullLesson) {
      setFullLesson(fullLesson);
      setDoesLessonAlreadyExist(true);
    }
    if (lessonCard) {
      setLessonCard(lessonCard);
    }
    if (date) {
      setDate(date);
    }
    setIsModalOpen(true);
  }
  return (
    <LessonCardStyles color={fullLesson?.color! || lessonCard?.color!}>
      <div className="card-header">
        {/*TODO: render the lessons' and course's name*/}
        <h1>{fullLesson?.course_name! || lessonCard?.name}</h1>
        {(fullLesson?.unit! || lessonCard?.unit) && (
          <div>Unit: {fullLesson?.unit! || lessonCard?.unit}</div>
        )}
      </div>
      <div className="card-content">
        <div>
          {formatTime(fullLesson?.start_time! || lessonCard?.start_time!)} -{" "}
          {formatTime(fullLesson?.end_time! || lessonCard?.end_time!)}
        </div>
        <div className="card-link" onClick={openModal}>
          See Full
        </div>
      </div>
    </LessonCardStyles>
  );
};

export default LessonCard;
