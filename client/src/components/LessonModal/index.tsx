import React, { useEffect, useState } from "react";
import { LessonModalStyles } from "styles/LessonModalStyles";
import { formatTime } from "utils/timeFormaters";
import { useModal } from "../../context/LessonModalContext";
import { createLesson, updateLesson } from "../../services/lessons";
import { LessonRequestBodyType } from "../../types/Lesson";
import Loader from "components/Loader/Loader";
import moment from "moment";

const LessonModal = () => {
  const {
    isModalLoading,
    isModalOpen,
    setIsModalOpen,
    date,
    lessonCard,
    fullLesson,
    doesLessonAlreadyExist,
    setDoesLessonAlreadyExist,
    setFullLesson,
    setLessonCard,
  } = useModal();
  const [newTag, setNewTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    if (fullLesson === null) {
      setTags([]);
      setNote("");
    } else {
      setTags(fullLesson.tags);
      setNote(fullLesson.note);
    }
  }, [fullLesson, lessonCard]);

  function addNewTag(e: React.MouseEvent) {
    e.preventDefault();
    setTags([...tags, newTag]);
    setNewTag("");
  }

  async function handleLessonChange() {
    const payload: LessonRequestBodyType = {
      date,
      schedule_id: fullLesson?.schedule_id! || lessonCard?._id!,
      course_id: fullLesson?.course_id! || lessonCard?.course_id!,
      unit: "",
      tags,
      note,
      attachments: [],
    };

    if (!doesLessonAlreadyExist) {
      await createLesson(payload);
    } else {
      await updateLesson(payload, fullLesson?._id!);
    }

    // since modal will close aftter we create/update a lesson we want to reset all lesson variables in context
    resetLessonToBeNull();
  }

  function resetLessonToBeNull() {
    setIsModalOpen(false);
    setDoesLessonAlreadyExist(false);
    setFullLesson(null);
    setLessonCard(null);
  }

  if (isModalOpen) {
    if (isModalLoading) {
      return (
        <LessonModalStyles>
          <Loader height={"600px"} />
        </LessonModalStyles>
      );
    }
    return (
      <LessonModalStyles>
        <div className="lesson-header">
          <h3 className="lesson-course-name">
            {fullLesson?.course_name || lessonCard?.name}
          </h3>
          <h4 className="lesson-date">
            {formatTime(fullLesson?.start_time! || lessonCard?.start_time!)} to{" "}
            {formatTime(fullLesson?.end_time! || lessonCard?.end_time!)} on{" "}
            {fullLesson
              ? moment(fullLesson?.date.toString()).format("MMMM Do YYYY")
              : moment(date.toString()).format("MMMM Do YYYY")}
          </h4>
        </div>
        <div className="lesson-body">
          <div className="lesson-tags">
            <div>
              <span>Tags:</span>
              {tags.length > 0 &&
                tags.map((tag, i) => (
                  <span key={i} className="pill gray-pill">
                    {tag}
                  </span>
                ))}
            </div>
            <form className="lesson-new-tag-form">
              <label htmlFor="new-tag">Add tag: </label>
              <input
                className="lesson-new-tag-input"
                id="new-tag"
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
              <button
                className="lesson-new-tag-button"
                type="submit"
                onClick={(e: React.MouseEvent) => addNewTag(e)}
              >
                +
              </button>
            </form>
          </div>
          <textarea
            className="lesson-text-area"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <div className="lesson-buttons">
            <button
              className="lesson-button-cancel"
              onClick={resetLessonToBeNull}
            >
              cancel
            </button>
            <button className="lesson-button-save" onClick={handleLessonChange}>
              {doesLessonAlreadyExist ? "update" : "save"}
            </button>
          </div>
        </div>
      </LessonModalStyles>
    );
  } else {
    return null;
  }
};

export default LessonModal;
