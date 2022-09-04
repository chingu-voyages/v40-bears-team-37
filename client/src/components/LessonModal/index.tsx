import { useState } from "react";
import { LessonModalStyles } from "styles/LessonModalStyles";
import { formatTime } from "utils/timeFormaters";
import { useModal } from "../../context/LessonModalContext";
import { createLesson } from "../../services/lessons";
import { Lesson } from "../../types/Lesson";

const LessonModal = () => {
  const { isModalOpen, setIsModalOpen, lessonCard, schedule } = useModal()
  const payload = {} as Lesson
  const [ newTag, setNewTag ] = useState<string>("")
  const [ tags, setTags ] = useState<string[]>([])

  function addNewTag(e: any) {
    e.preventDefault()
    setTags([...tags, newTag])
    setNewTag("")
  }

  if (isModalOpen) {
    return (
      <LessonModalStyles>
        <div className="lesson-header">
          <h3 className="lesson-course-name">{lessonCard.name}</h3>
          <h4 className="lesson-date">{formatTime(lessonCard.start_time)} to {formatTime(lessonCard.end_time)} on {schedule.day}</h4>
        </div>
        <div className="lesson-body">
          <div className="lesson-tags">
            <div>
              <span>Tags:</span>
              {tags.map(tag => <span className="pill gray-pill">{tag}</span>)}
            </div>
            <form className="lesson-new-tag-form">
              <label htmlFor="new-tag">Add tag: </label>
              <input className="lesson-new-tag-input" id="new-tag" type="text" value={newTag} onChange={e => setNewTag(e.target.value) } />
              <button className="lesson-new-tag-button" type="submit" onClick={addNewTag}>+</button>
            </form> 
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