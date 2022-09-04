import styled from "styled-components";

export const CourseStyles = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  section {
    margin: 10px 0;
  }
  input,
  select {
    margin-right: 10px;
    font-family: "Roboto", sans-serif;
    padding: 3px;
  }
  .btn-schedule,
  .btn-delete {
    background-color: var(--white);
    color: var(--primary-text);
    font-size: 0.72rem;
    padding: 6px 9px;
  }
`;
