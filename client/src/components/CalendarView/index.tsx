import { useEffect, useState } from "react";
import styled from "styled-components";
import CalendarWeek from "components/CalendarView/CalendarWeek";

import { getWeeklySchedule as getWeeklyScheduleService } from "../../services/courses";
import { WeeklyScheduleResponseType, WeeklyScheduleResultsType } from "types/courses";

const CalendarViewStyles = styled.div`
  display: flex;
  margin: 0 auto;
`;

const CalendarView = () => {
  const [weeklySchedule, setWeeklySchedule] = useState<WeeklyScheduleResultsType>();

  useEffect(() => {
    const getWeeklySchedule = async () => {
      const weeklyScheduleData = await getWeeklyScheduleService({
        weekId: undefined
      }) as WeeklyScheduleResponseType;
      if (weeklyScheduleData.success) {
        setWeeklySchedule(weeklyScheduleData.data);
      }
      console.log("weeklyScheduleData", weeklyScheduleData)
    };
    getWeeklySchedule();
  }, []);
  
  return (
    <>
      { weeklySchedule && 
        <CalendarViewStyles>
          <CalendarWeek week={weeklySchedule} />
        </CalendarViewStyles>
      }
    </>
  );
};

export default CalendarView;
