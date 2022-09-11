import LessonCard from "components/CalendarView/LessonCard";
import { PageWithSidebar } from "components/Containers/PageWithSidebar";
import Loader from "components/Loader/Loader";
import { useNavigate, useSearchParams } from "react-router-dom";
import useFilterLessonsByTags from "../hooks/useFilterLessonsByTags";
import styled from "styled-components";
import { InputFormStyles } from "styles/AuthFormStyles";
import { useState } from "react";

const FieldContainer = styled.div`
  width: 60vw;
  padding-bottom: 20px;
`;

const Container = styled.div`
  max-width: 80vw;
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const PCenter = styled.p`
  text-align: center;
  width: 100%;
`;

function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const tag = searchParams.get("tag") || undefined;
  const { isLoading, filteredLessonNotes } = useFilterLessonsByTags(tag);

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchValue.length === 0) {
      return;
    }
    if (e.key === "Enter") {
      navigate({
        search: `?tag=${searchValue}`,
      });
    }
  };

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

      <FieldContainer>
        <InputFormStyles>
          <input
            placeholder="Type-in the tag and click enter..."
            onChange={handleSearch}
            onKeyDown={handleKeyPress}
          />
        </InputFormStyles>
      </FieldContainer>

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

        {filteredLessonNotes.length === 0 && <PCenter>No Lesson Found</PCenter>}
      </Container>
    </PageWithSidebar>
  );
}

export default Search;
