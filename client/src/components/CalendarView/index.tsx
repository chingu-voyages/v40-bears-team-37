import {useEffect, useState} from "react";
import styled from "styled-components";
import CalendarWeek from "components/CalendarView/CalendarWeek";

import {getWeeklySchedule as getWeeklyScheduleService} from "../../services/courses";
import {
  WeeklyScheduleResponseType,
  WeeklyScheduleResultsType,
} from "types/courses";
import {PageWithSidebar} from 'components/Containers/PageWithSidebar';

const CalendarViewStyles = styled.div`
  display: flex;
  margin: 0 auto;
`;

const CalendarView = () => {
  const [weeklySchedule, setWeeklySchedule] =
      useState<WeeklyScheduleResultsType>();

  const getWeeklySchedule = async (weekId: number | undefined = undefined) => {
    const weeklyScheduleData = (await getWeeklyScheduleService({
      weekId,
    })) as WeeklyScheduleResponseType;
    if (weeklyScheduleData.success) {
      setWeeklySchedule(weeklyScheduleData.data);
    }
  };

  useEffect(() => {
    getWeeklySchedule();
  }, []);

  return (
      <PageWithSidebar>
        <>
          {weeklySchedule && (
              <CalendarViewStyles>
                <CalendarWeek
                    week={weeklySchedule}
                    getWeeklySchedule={getWeeklySchedule}
                />
              </CalendarViewStyles>
          )}
        </>
      </PageWithSidebar>
  );
};

export default CalendarView;
