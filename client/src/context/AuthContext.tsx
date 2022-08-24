import {createContext, ReactNode, useContext, useState} from 'react';
import {UserType} from 'types/auth';


interface IAuthContext {
    isAuthed: boolean;
    user: UserType | null;

    login(user: UserType): void;

    logout(): void;
}

export const authContextDefaults: IAuthContext = {
    isAuthed: false,
    user: null,
    login: () => {
    },
    logout: () => {
    },
}

export const AuthContext = createContext<IAuthContext>(authContextDefaults)

const AuthProvider: React.FC<({ children: ReactNode })> = ({children}) => {
    const [isAuthed, setIsAuthed] = useState<boolean>(false)
    const [user, setUser] = useState<UserType | null>(null)

    const login = (user: UserType) => {
        setUser(user)
        setIsAuthed(true)
    }
    const logout = () => {
        setUser(null)
        setIsAuthed(false)
    }

    return <AuthContext.Provider value={{
        isAuthed, user, login, logout
    }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext<IAuthContext>(AuthContext)
}

export default AuthProvider