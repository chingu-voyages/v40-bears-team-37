import styled from 'styled-components';
import {devices} from 'styles/Sizes';

export const CalendarDayStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 20%;

  .day-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--primary-dark);
  }

  @media ${devices.tablet} {
    width: 100%;
    align-items: center;

    .day-header {
      width: 80%;
    }
  }
}
`;