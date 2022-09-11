import LessonCard from "components/CalendarView/LessonCard";
import { PageWithSidebar } from "components/Containers/PageWithSidebar";
import Loader from "components/Loader/Loader";
import { useNavigate, useSearchParams } from "react-router-dom";
import useFilterLessonsByTags from "../hooks/useFilterLessonsByTags";
import styled from "styled-components";
import { InputFormStyles } from "styles/AuthFormStyles";
import { useState } from "react";
import { Lesson } from "types/Lesson";
import { useModal } from "context/LessonModalContext";

const Blur = styled.div<{ isModalOpen: boolean }>`
  filter: ${(props) => (props.isModalOpen ? "blur(3px)" : "blur(0px)")};
`;

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
  const { isModalOpen } = useModal();

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
    <Blur isModalOpen={isModalOpen}>
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
                fullLesson={lessonNote as Lesson}
              />
            ))}

          {filteredLessonNotes.length === 0 && (
            <PCenter>No Lesson Found</PCenter>
          )}
        </Container>
      </PageWithSidebar>
    </Blur>
  );
}

export default Search;
