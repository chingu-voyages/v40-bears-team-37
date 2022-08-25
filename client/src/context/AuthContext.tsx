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
    const [user, setUser] = useState<UserType | null>(null)

    const isAuthed = (user !== null)

    // TODO: maybe also add register here

    const login = (user: UserType) => {
        setUser(user)
        // TODO: also actually login to the backend using the api
    }
    const logout = () => {
        setUser(null)
        // TODO: also actually logout to the backend using the api
    }

    return <AuthContext.Provider value={{
        isAuthed, user, login, logout
    }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext<IAuthContext>(AuthContext)
}

export default AuthProvider