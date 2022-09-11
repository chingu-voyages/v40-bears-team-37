import LessonCard from "components/CalendarView/LessonCard";
import { PageWithSidebar } from "components/Containers/PageWithSidebar";
import Loader from "components/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import useFilterLessonsByTags from "../hooks/useFilterLessonsByTags";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

function Search() {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag") || undefined;
  const { isLoading, filteredLessonNotes } = useFilterLessonsByTags(tag);

  if (isLoading) {
    return (
      <PageWithSidebar>
        <Loader displayWelcomeText={false} />
      </PageWithSidebar>
    );
  }

  return (
    <PageWithSidebar>
      <p>Search through your past lessons on Notum</p>
      {/* TODO: search bar */}
      <Container>
        {filteredLessonNotes.length > 0 &&
          filteredLessonNotes.map((lessonNote) => (
            <LessonCard
              key={lessonNote._id}
              lesson={{
                _id: lessonNote._id,
                color: lessonNote.color,
                start_time: lessonNote.start_time,
                end_time: lessonNote.end_time,
                name: lessonNote.course_name,
                course_id: lessonNote.course_id,
              }}
              schedule={{
                date: lessonNote.date,
                day: "Monday", // TODO make dynamic
                lessons: [] // TODO make dynamic
              }}
            />
          ))}
      </Container>
    </PageWithSidebar>
  );
}

export default Search;
