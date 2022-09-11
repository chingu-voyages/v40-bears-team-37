import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { getLessonById } from "services/lessons";
import { LessonCardType, scheduleType } from "types/courses";
import { Lesson } from "types/Lesson";
import { GetLessonResponseType } from "../services/lessons";

interface ILessonModalContext {
  isModalOpen: boolean;
  lessonId: string | null;
  lessonCard: LessonCardType;
  schedule: scheduleType;
  lesson: Lesson | null;
  doesLessonAlreadyExist: boolean;
  isModalLoading: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setLessonId: Dispatch<SetStateAction<string | null>>;
  setLessonCard: Dispatch<SetStateAction<LessonCardType>>;
  setLesson: Dispatch<SetStateAction<Lesson | null>>;
  setSchedule: Dispatch<SetStateAction<scheduleType>>;
  setDoesLessonAlreadyExist: Dispatch<SetStateAction<boolean>>;
  setIsModalLoading: Dispatch<SetStateAction<boolean>>;
}

export const EMPTY_LESSON_CARD: LessonCardType = {
  _id: "",
  name: "",
  course_id: "",
  color: "",
  start_time: "",
  end_time: "",
};

const EMPTY_SCHEDULE = {
  day: "",
  date: 0,
  lessons: [],
};

export const defaultContextValues: ILessonModalContext = {
  isModalOpen: false,
  lessonId: null,
  lessonCard: EMPTY_LESSON_CARD,
  schedule: EMPTY_SCHEDULE,
  lesson: null,
  doesLessonAlreadyExist: false,
  isModalLoading: false,
  setLessonId: () => {},
  setIsModalOpen: () => {},
  setLessonCard: () => {},
  setLesson: () => {},
  setSchedule: () => {},
  setDoesLessonAlreadyExist: () => {},
  setIsModalLoading: () => {},
};

const LessonModalContext =
  createContext<ILessonModalContext>(defaultContextValues);

const LessonModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lessonId, setLessonId] = useState<string | null>(null);
  const [lessonCard, setLessonCard] =
    useState<LessonCardType>(EMPTY_LESSON_CARD);
  const [schedule, setSchedule] = useState<scheduleType>(EMPTY_SCHEDULE);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [doesLessonAlreadyExist, setDoesLessonAlreadyExist] =
    useState<boolean>(false);
  const [isModalLoading, setIsModalLoading] = useState<boolean>(false);

  // grab lesson whenever use clicks on a different lesson card
  useEffect(() => {
    async function getLesson() {
      setIsModalLoading(true);
      const response: GetLessonResponseType = await getLessonById(
        lessonId as string,
      );
      if (response.success) {
        setLesson(response.data);
        setDoesLessonAlreadyExist(true);
      } else {
        setLesson(null);
        setDoesLessonAlreadyExist(false);
      }
      setIsModalLoading(false);
    }
    if (lessonId !== null) {
      getLesson();
    }
  }, [lessonId]);

  return (
    <LessonModalContext.Provider
      value={{
        isModalOpen,
        lessonId,
        lessonCard,
        schedule,
        lesson,
        doesLessonAlreadyExist,
        isModalLoading,
        setIsModalOpen,
        setLessonId,
        setLessonCard,
        setLesson,
        setSchedule,
        setDoesLessonAlreadyExist,
        setIsModalLoading,
      }}
    >
      {children}
    </LessonModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext<ILessonModalContext>(LessonModalContext);
};

export default LessonModalProvider;
