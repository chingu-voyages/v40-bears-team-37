import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {CheckLoginStatusType, LoginInputType, LoginResponseType, LogoutType, UserType} from 'types/auth';
import {isLoggedIn as isLoggedInService, loginServer, logoutFromServer} from 'services/auth';


interface IAuthContext {
    isAuthed: boolean;
    user: UserType | null;

    login(loginDetails: LoginInputType): void;

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
    // initialize AuthContext on Load

    useEffect(() => {
        const checkLogin = async () => {
            console.log("checking if i'm logged in (server)")
            const userData = await isLoggedInService() as CheckLoginStatusType
            console.log(userData)
            if (userData && userData.isLoggedIn === true) {
                console.log('check is logged in', userData)
            } else {
                console.log('not logged in')
            }


            //setUser(userData.user as UserType)

        }
        checkLogin()

    })

    const [user, setUser] = useState<UserType | null>(null)

    const isAuthed = (user !== null)


    // TODO: maybe also add register here

    const login = async (loginDetail: LoginInputType) => {
        const loginResponseData = await loginServer(loginDetail) as LoginResponseType
        if (loginResponseData.success && loginResponseData.data) {
            setUser(loginResponseData.data)
        }
    }
    const logout = async () => {
        const logoutResponseData = await logoutFromServer() as LogoutType
        console.log(logoutResponseData)
        if (logoutResponseData.success) {
            setUser(null)
        }
    }

    return <AuthContext.Provider value={{
        isAuthed, user, login, logout
    }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext<IAuthContext>(AuthContext)
}

export default AuthProvider