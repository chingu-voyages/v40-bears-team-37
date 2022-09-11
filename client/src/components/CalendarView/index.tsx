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

interface CalendarViewStylesProps {
  isModalOpen: boolean;
}

const CalendarViewStyles = styled.div<CalendarViewStylesProps>`
  display: flex;
  margin: 0 auto;
  filter: ${(props) => (props.isModalOpen ? "blur(3px)" : "blur(0px)")};
`;

const CalendarView = () => {
  const [weeklySchedule, setWeeklySchedule] =
    useState<WeeklyScheduleResultsType>();
  const { lessonCard, isModalOpen } = useModal();

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
  }, [lessonCard, isModalOpen]);

  return (
    <PageWithSidebar>
      <>
        {weeklySchedule && (
          <CalendarViewStyles isModalOpen={isModalOpen}>
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
