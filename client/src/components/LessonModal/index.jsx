import { LessonModalStyles } from "styles/LessonModalStyles";

const LessonCard = () => {
  return (
    <LessonModalStyles>
      <div className="lesson-header">
        <h1 className="lesson-course-name">COMP SCI 50</h1>
        <h1 className="lesson-date">8:00am - 9:00am on Mon, Aug 15th 2022</h1>
      </div>
      <h4 className="lesson-unit">Arrays</h4>
      <div className="lesson-tags">
        <span className="lesson-tag-1">Tag 1</span>
        <span className="lesson-tag-2">Tag 2</span>
        <span className="lesson-tag-3">Tag 3</span>
      </div>
      <div className="lesson-note">
        <textarea></textarea>
      </div>
      <div className="lesson-buttons">
        <button>cancel</button>
        <button>save</button>
      </div>
    </LessonModalStyles>
  );
};

export default LessonCard;

/*
  div LessonModalStyles
    div header
      h1 course name
      h3 lesson date and time
    h4 unit
    div tags
      span tag1
      span tag2
      ...
    div note
    div buttons
      button cancel
      button save
*/