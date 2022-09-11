import React, { useEffect, useState } from "react";
import { LessonModalStyles } from "styles/LessonModalStyles";
import { formatTime } from "utils/timeFormaters";
import { useModal } from "../../context/LessonModalContext";
import { createLesson, updateLesson } from "../../services/lessons";
import { LessonRequestBodyType } from "../../types/Lesson";

const LessonModal = () => {
  const { isModalOpen, setIsModalOpen, lessonCard, schedule, lesson, setLessonId, doesLessonAlreadyExist, lessonId, setDoesLessonAlreadyExist, setLesson } = useModal()
  const [ newTag, setNewTag ] = useState<string>("")
  const [ tags, setTags ] = useState<string[]>([])
  const [ note, setNote ] = useState<string>("")

  useEffect(() => {
    if (lesson === null) {
      setTags([])
      setNote("")
    } else {
      setTags(lesson.tags)
      setNote(lesson.note)
    }
  }, [lesson, lessonId])

  function addNewTag(e: React.MouseEvent) {
    e.preventDefault()
    setTags([...tags, newTag])
    setNewTag("")
  }

  async function handleLessonChange() {
    const payload: LessonRequestBodyType = {
      date: schedule.date,
      schedule_id: lessonCard._id,
      course_id: lessonCard.course_id,
      unit: "",
      tags,
      note,
      attachments: []
    }

    if (!doesLessonAlreadyExist) {
      await createLesson(payload)
      console.log('succesfully created a lesson')
    } else {
      await updateLesson(payload, lessonId as string)
      console.log('succesfully updated a lesson')
    }

    // since modal will close aftter we create/update a lesson we want to reset all lesson variables in context
    resetLessonToBeNull()
  }

  function resetLessonToBeNull() {
    setLessonId(null)
    setIsModalOpen(false)
    setDoesLessonAlreadyExist(false)
    setLesson(null)
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
              {tags.map((tag, i) => <span key={i} className="pill gray-pill">{tag}</span>)}
              </div>
            <form className="lesson-new-tag-form">
              <label htmlFor="new-tag">Add tag: </label>
              <input className="lesson-new-tag-input" id="new-tag" type="text" value={newTag} onChange={e => setNewTag(e.target.value) } />
              <button className="lesson-new-tag-button" type="submit" onClick={(e: React.MouseEvent) => addNewTag(e)}>+</button>
            </form> 
          </div>
          <textarea className="lesson-text-area" value={note} onChange={e => setNote(e.target.value)} />
          <div className="lesson-buttons">
            <button className="lesson-button-cancel" onClick={resetLessonToBeNull}>cancel</button>
            <button className="lesson-button-save" onClick={handleLessonChange}>{doesLessonAlreadyExist ? "update" : "save"}</button>
          </div>
        </div>
      </LessonModalStyles>
    );
  } else {
    return null
  }
};

export default LessonModal;