import styled from "styled-components";
import CalendarWeek from "components/CalendarView/CalendarWeek";
import data from "api/dummy-data.json";

const CalendarViewStyles = styled.div`
  display: flex;
  margin: 0 auto;
`;

const CalendarView = () => {
  const { week } = data;
  return (
    <CalendarViewStyles>
      <CalendarWeek week={week} />
    </CalendarViewStyles>
  );
};

export default CalendarView;
