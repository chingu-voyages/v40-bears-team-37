import { LessonModalStyles } from "styles/LessonModalStyles";
import { useModal } from "../../context/LessonModalContext";
import { createLesson } from "../../services/lessons";
import { Lesson } from "../../types/Lesson";
import { EMPTY_LESSON } from "../../context/LessonModalContext";

const LessonModal = () => {
  const { isModalOpen, setIsModalOpen, lesson } = useModal()
  const payload: Lesson = EMPTY_LESSON

  if (isModalOpen) {
    return (
      <LessonModalStyles>
        <div className="lesson-header">
          <h3 className="lesson-course-name">{lesson.course_name}</h3>
          <h4 className="lesson-date">{lesson.start_time} {lesson.end_time} on {lesson.date}</h4>
        </div>
        <div className="lesson-body">
          <div className="lesson-unit">
            <span>Unit: </span>
            <span className="pill gray-pill">{}</span>
          </div>
          <div className="lesson-tags">
            <span>Tags:</span>
            {lesson.tags && lesson.tags.map(tag => <span className="pill gray-pill">{tag}</span>)}
          </div>
          <textarea className="lesson-text-area" />
          <div className="lesson-buttons">
            <button className="lesson-button-cancel" onClick={() => setIsModalOpen(false)}>cancel</button>
            <button className="lesson-button-save" onClick={() => createLesson(payload)}>save</button>
          </div>
        </div>
      </LessonModalStyles>
    );
  } else {
    return null
  }
};

export default LessonModal;