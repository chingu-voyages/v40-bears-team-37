import styled from "styled-components";

export const CourseStyles = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  section {
    margin: 10px;
  }
  input,
  select {
    font-family: "Roboto", sans-serif;
    padding: 3px;
    display: flex;
    width: 33vw;
  }
  .btn-schedule,
  .btn-delete {
    background-color: var(--white);
    color: var(--primary-text);
    font-size: 0.72rem;
    padding: 6px 9px;
  }
  .btn-delete {
    margin-top: 10px;
  }
  @media (max-width: 650px) {
    input,
    select {
      width: 50vw;
    }
  }
`;
