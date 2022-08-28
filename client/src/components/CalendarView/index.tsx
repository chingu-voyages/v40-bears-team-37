import styled from "styled-components";
import CalendarWeek from "components/CalendarView/CalendarWeek";
import data from "api/dummy-data.json";

import { getWeeklySchedule as getWeeklyScheduleService } from "../../services/courses";
import { useEffect } from "react";

const CalendarViewStyles = styled.div`
  display: flex;
  margin: 0 auto;
`;

const CalendarView = () => {
  const { week } = data;

  useEffect(() => {
    const getWeeklySchedule = async () => {
      const weeklyScheduleData = await getWeeklyScheduleService({
        weekId: undefined
      })
    };
    getWeeklySchedule();
  }, []);
  
  return (
    <CalendarViewStyles>
      <CalendarWeek week={week} />
    </CalendarViewStyles>
  );
};

export default CalendarView;
