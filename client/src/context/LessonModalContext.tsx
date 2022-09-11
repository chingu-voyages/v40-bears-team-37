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
import { LessonCardType } from "types/courses";
import { Lesson } from "types/Lesson";
import { GetLessonResponseType } from "../services/lessons";

interface ILessonModalContext {
  isModalOpen: boolean;
  lessonCard: LessonCardType | null;
  fullLesson: Lesson | null;
  doesLessonAlreadyExist: boolean;
  isModalLoading: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setLessonCard: Dispatch<SetStateAction<LessonCardType | null>>;
  setFullLesson: Dispatch<SetStateAction<Lesson | null>>;
  setDoesLessonAlreadyExist: Dispatch<SetStateAction<boolean>>;
  setIsModalLoading: Dispatch<SetStateAction<boolean>>;
  date: number;
  setDate: Dispatch<SetStateAction<number>>;
}

export const EMPTY_LESSON_CARD: LessonCardType = {
  _id: "",
  name: "",
  course_id: "",
  color: "",
  start_time: "",
  end_time: "",
};

export const defaultContextValues: ILessonModalContext = {
  isModalOpen: false,
  lessonCard: EMPTY_LESSON_CARD,
  fullLesson: null,
  doesLessonAlreadyExist: false,
  isModalLoading: false,
  setIsModalOpen: () => {},
  setLessonCard: () => {},
  setFullLesson: () => {},
  setDoesLessonAlreadyExist: () => {},
  setIsModalLoading: () => {},
  date: 0,
  setDate: () => {},
};

const LessonModalContext =
  createContext<ILessonModalContext>(defaultContextValues);

const LessonModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lessonCard, setLessonCard] = useState<LessonCardType | null>(
    EMPTY_LESSON_CARD,
  );
  const [date, setDate] = useState(0);
  const [fullLesson, setFullLesson] = useState<Lesson | null>(null);
  const [doesLessonAlreadyExist, setDoesLessonAlreadyExist] =
    useState<boolean>(false);
  const [isModalLoading, setIsModalLoading] = useState<boolean>(false);

  // grab lesson whenever use clicks on a different lesson card
  useEffect(() => {
    async function getLesson(id: string) {
      setIsModalLoading(true);
      const response: GetLessonResponseType = await getLessonById(id);
      if (response.success) {
        setFullLesson(response.data);
        setDoesLessonAlreadyExist(true);
      } else {
        setFullLesson(null);
        setDoesLessonAlreadyExist(false);
      }
      setIsModalLoading(false);
    }
    if (lessonCard?.lesson_id) {
      getLesson(lessonCard._id);
    }
  }, [lessonCard, date]);

  return (
    <LessonModalContext.Provider
      value={{
        isModalOpen,
        lessonCard,
        fullLesson,
        doesLessonAlreadyExist,
        isModalLoading,
        setIsModalOpen,
        setLessonCard,
        setFullLesson,
        setDoesLessonAlreadyExist,
        setIsModalLoading,
        date,
        setDate,
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
