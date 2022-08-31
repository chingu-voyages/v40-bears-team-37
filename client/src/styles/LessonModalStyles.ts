import styled from "styled-components";

export const LessonModalStyles = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: white;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-height: 70%;
  min-width: 60%;
  
  .lesson-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #6FA9B1;
    min-height: 80px;
    padding: 0 30px;
  }

  .lesson-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 30px;
  }

  .lesson-date {
    font-weight: 400;
  }

  .lesson-unit, .lesson-tags {
    display: flex; 
    align-items: center;
    flex-wrap: wrap;
    min-height: 30px;
    gap: 20px;
  }

  .lesson-tag-1 {
    background-color: #EBAE72;
  }

  .lesson-tag-2 {
    background-color: #6EA5D8;
  }

  .lesson-tag-3 {
    background-color: #6FA9B1;
  }

  .pill {
    min-width: 60px;
    text-align: center;
    padding: 5px;
    border-radius: 8%;
  }

  .lesson-text-area {
    min-height: 380px;
    background-color: var(--light-gray);
    border: none;
    resize: none;
    box-sizing: border-box;
    padding: 20px;
    cursor: pointer;
  }

  .lesson-text-area:focus {
    outline: none;
    border: 2px solid #6FA9B1;
  }

  .gray-pill {
    background-color: var(--light-gray);
  }

  .lesson-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    width: 100px;
    border-radius: 7px;
  }
  .lesson-button-cancel {
    background-color: var(--light-gray);
    color: black;
  }

  .lesson-button-cancel:hover {
    filter: brightness(85%);
  }

  .lesson-button-save {
    color: white;
  }
  .lesson-button-save:hover {
    filter: brightness(90%);
  }
`;
