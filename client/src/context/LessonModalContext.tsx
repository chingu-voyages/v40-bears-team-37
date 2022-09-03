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
import { Lesson } from "types/Lesson";
import { GetLessonResponseType } from "../services/lessons"

interface ILessonModalContext {
    isModalOpen: boolean;
    lessonId: string | null;
    lesson: Lesson | {}
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    setLessonId: Dispatch<SetStateAction<string>>;
    setLesson: Dispatch<SetStateAction<Lesson>>;
}

export const defaultContextValues: ILessonModalContext = {
    isModalOpen: false,
    lessonId: null,
    lesson: {},
    setLessonId: () => {},
    setIsModalOpen: () => {},
    setLesson: () => {}
};

const LessonModalContext = createContext<ILessonModalContext>(defaultContextValues);

const EMPTY_LESSON = {
    _id: null,
    course_id: "",
    schedule_id: "",
    course_name: "",
    start_time: "",
    end_time: "",
    color: "",
    unit: "",
    tags: [],
    note: '',
    date: '',
    attachments: [] 
}

const LessonModalProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ lessonId, setLessonId ] = useState('')
    const [ lesson, setLesson ] = useState<Lesson>(EMPTY_LESSON)

    // grab lesson whenever use clicks on a different lesson card
    useEffect(() => {
        async function getLesson() {
            const response: GetLessonResponseType = await getLessonById(lessonId)
            if (response.success) {
                console.log("found a lesson!", response.data)
                setLesson(response.data)
            } else {
                console.log(response.message)
                setLesson(EMPTY_LESSON)
            }
        }
        getLesson()
    }, [lessonId])
    
    return (
        <LessonModalContext.Provider
            value={{
                isModalOpen,
                lessonId,
                lesson,
                setIsModalOpen,
                setLessonId,
                setLesson
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