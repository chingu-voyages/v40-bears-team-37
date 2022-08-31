import { LessonModalStyles } from "styles/LessonModalStyles";
import { useModal } from "../../context/LessonModalContext";

const LessonModal = () => {
  const { isModalOpen, setIsModalOpen } = useModal()
  if (isModalOpen) {
    return (
      <LessonModalStyles>
        <div className="lesson-header">
          <h3 className="lesson-course-name">COMP SCI 50</h3>
          <h4 className="lesson-date">8:00am - 9:00am on Mon, Aug 15th 2022</h4>
        </div>
        <div className="lesson-body">
          <div className="lesson-unit">
            <span>Unit: </span>
            <span className="pill gray-pill">Arrays</span>
          </div>
          <div className="lesson-tags">
            <span>Tags:</span>
            <span className="pill gray-pill">Tag 1</span>
            <span className="pill gray-pill">Tag 3</span>
          </div>
          <textarea className="lesson-text-area" />
          <div className="lesson-buttons">
            <button className="lesson-button-cancel" onClick={() => setIsModalOpen(false)}>cancel</button>
            <button className="lesson-button-save">save</button>
          </div>
        </div>
      </LessonModalStyles>
    );
  } else {
    return null
  }
};

export default LessonModal;