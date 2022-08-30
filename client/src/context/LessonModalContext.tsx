import {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
    SetStateAction
} from "react";

interface ILessonModalContext {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    createLesson: () => void;
}

export const defaultContextValues: ILessonModalContext = {
    isModalOpen: false,
    setIsModalOpen: () => {},
    createLesson: () => {}
};

const LessonModalContext = createContext<ILessonModalContext>(defaultContextValues);

const LessonModalProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    function createLesson() {
        console.log("trying to create a lesson...")
    }
    
    return (
        <LessonModalContext.Provider
            value={{
                isModalOpen,
                setIsModalOpen,
                createLesson
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