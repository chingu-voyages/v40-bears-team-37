import { useEffect, useState } from "react";
import styled from "styled-components";
import CalendarWeek from "components/CalendarView/CalendarWeek";

import { getWeeklySchedule as getWeeklyScheduleService } from "../../services/courses";
import {
  WeeklyScheduleResponseType,
  WeeklyScheduleResultsType,
} from "types/courses";
import { PageWithSidebar } from "components/Containers/PageWithSidebar";
import { useModal } from "context/LessonModalContext";

const CalendarViewStyles = styled.div`
  display: flex;
  margin: 0 auto;
`;

const CalendarView = () => {
  const [weeklySchedule, setWeeklySchedule] = useState<WeeklyScheduleResultsType>();
  const { lessonId } = useModal();

  const getWeeklySchedule = async (weekId: number | undefined = undefined) => {
    const weeklyScheduleData = (await getWeeklyScheduleService({
      weekId,
    })) as WeeklyScheduleResponseType;
    if (weeklyScheduleData.success) {
      setWeeklySchedule(weeklyScheduleData.data);
    }
  };

  // since weekly_schedule has the lesson_id for lessons in the database
  // we need to synchronize our weekly_schedule with our lessonId (which changes anytime the lesson modal opens or closes)
  useEffect(() => {
    getWeeklySchedule();
  }, [lessonId]);

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
