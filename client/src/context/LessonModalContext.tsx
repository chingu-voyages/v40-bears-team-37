import {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
    useEffect
} from "react";
import { getLessonById } from "services/lessons";
import { LessonCardType, scheduleType } from "types/courses";
import { GetLessonResponseType } from "../services/lessons"

interface ILessonModalContext {
    isModalOpen: boolean;
    lessonId: string | null;
    lessonCard: LessonCardType;
    schedule: scheduleType;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    setLessonId: Dispatch<SetStateAction<string>>;
    setLessonCard: Dispatch<SetStateAction<LessonCardType>>;
    setSchedule: Dispatch<SetStateAction<scheduleType>>;
}

export const EMPTY_LESSON_CARD: LessonCardType = {
    _id: "",
    name: "",
    course_id: "",
    color: "",
    start_time: "",
    end_time: "",
}

const EMPTY_SCHEDULE = {
    day: "",
    date: 0,
    lessons: []
}

export const defaultContextValues: ILessonModalContext = {
    isModalOpen: false,
    lessonId: null,
    lessonCard: EMPTY_LESSON_CARD,
    schedule: EMPTY_SCHEDULE,
    setLessonId: () => {},
    setIsModalOpen: () => {},
    setLessonCard: () => {},
    setSchedule: () => {}
};

const LessonModalContext = createContext<ILessonModalContext>(defaultContextValues);

const LessonModalProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ lessonId, setLessonId ] = useState('')
    const [ lessonCard, setLessonCard ] = useState<LessonCardType>(EMPTY_LESSON_CARD)
    const [ schedule, setSchedule ] = useState<scheduleType>(EMPTY_SCHEDULE)

    // grab lesson whenever use clicks on a different lesson card
    useEffect(() => {
        async function getLesson() {
            const response: GetLessonResponseType = await getLessonById(lessonId)
            if (response.success) {
                console.log("found a lesson!", response.data)
            } else {
                console.log(response.message)
            }
        }
        getLesson()
    }, [lessonId])


    return (
        <LessonModalContext.Provider
            value={{
                isModalOpen,
                lessonId,
                lessonCard,
                schedule,
                setIsModalOpen,
                setLessonId,
                setLessonCard,
                setSchedule
            }}
        >
            {children}
        </LessonModalContext.Provider>
    );
};

export const useModal  = () => {
    return useContext<ILessonModalContext>(LessonModalContext);
};

export default LessonModalProvider;