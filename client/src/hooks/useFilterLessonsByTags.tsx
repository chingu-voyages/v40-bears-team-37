import { useEffect, useState } from "react";
import { getLessons, LessonNote } from "../services/lessons";

const useFilterLessonsByTags = (tag?: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredLessonNotes, setFilteredLessonNotes] = useState<LessonNote[]>(
    [],
  );

  const fetchLessonNotes = async (tag?: string) => {
    setIsLoading(true);
    try {
      const lessonApiRes = await getLessons(tag);
      const { success, data } = lessonApiRes.data;
      if (success) {
        setFilteredLessonNotes(data);
      }
    } catch (error) {
      console.error("There's an error when trying to fetch lesson notes");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchLessonNotes(tag);
  }, [tag]);

  return { isLoading, filteredLessonNotes };
};

export default useFilterLessonsByTags;
