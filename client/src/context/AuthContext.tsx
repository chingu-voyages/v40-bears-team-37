import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  CheckLoginStatusType,
  LoginInputType,
  LoginResponseType,
  LogoutType,
  UserType,
} from "types/auth";
import {
  isLoggedIn as isLoggedInService,
  loginServer,
  logoutFromServer,
} from "services/auth";

interface IAuthContext {
  isAuthed: boolean;
  user: UserType | null;

  setUser(user: UserType): void;

  login(loginDetails: LoginInputType): void;

  logout(): void;
}

export const authContextDefaults: IAuthContext = {
  isAuthed: false,
  user: null,
  setUser: () => {},
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<IAuthContext>(authContextDefaults);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // initialize AuthContext on Load
  const [user, setUser] = useState<UserType | null>(null);
  useEffect(() => {
    const checkLogin = async () => {
      const userIsLoggedIn =
        (await isLoggedInService()) as CheckLoginStatusType;
      if (userIsLoggedIn?.isLoggedIn === true) {
        setUser(userIsLoggedIn.user!!);
      }
    };
    checkLogin();
  }, []);

  const isAuthed = user !== null;

  // TODO: maybe also add register here

  const login = async (loginDetail: LoginInputType) => {
    const loginResponseData = (await loginServer(
      loginDetail
    )) as LoginResponseType;
    if (loginResponseData.success && loginResponseData.data) {
      setUser(loginResponseData.data);
    }
  };
  const logout = async () => {
    const logoutResponseData = (await logoutFromServer()) as LogoutType;
    console.log("logout response", logoutResponseData);
    if (logoutResponseData.success) {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthed,
        user,
        login,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext<IAuthContext>(AuthContext);
};

export default AuthProvider;
