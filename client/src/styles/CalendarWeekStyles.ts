import styled from "styled-components";
import {devices} from 'styles/Sizes';

export const CalendarWeekStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 0 10px;

  .calendar-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .calendar-header-month {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 30px;
    height: 30px;
    background-color: var(--white);
    border-radius: 9999px;
    cursor: pointer;
  }

  h1 {
    padding-bottom: 5px;
  }

  .lesson-grid {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  @media ${devices.tablet} {
    .lesson-grid {
      border: 2px solid red;
      flex-direction: column;
    }
  }

  @media ${devices.mobile} {
    .lesson-grid {
      border: 2px solid blue;
    }
  }
`;
