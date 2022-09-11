import styled from "styled-components";
import { devices } from "styles/Sizes";

interface LessonStyleProps {
  color: string;
}

export const LessonCardStyles = styled.div<LessonStyleProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.color};
  font-size: 0.8rem;
  max-width: 200px;
  min-width: 120px;
  padding: 10px 15px;

  .card-header {
    margin-bottom: 15px;
  }

  h1 {
    padding: 0;
    margin: 0;
    font-size: 1rem;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;
  }

  .card-link {
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .card-link:hover {
    text-decoration: none;
  }

  @media ${devices.tablet} {
    width: 200px;
  }
`;
