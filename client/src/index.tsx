import React, {useContext} from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "styles/GlobalStyles";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HelmetWrapper from "./components/Helmet";

import App from "App";
import Login from "routes/Login";
import Signup from "routes/Signup";
import Search from "routes/Search";
import Settings from "routes/Settings";

import PrivateRoute from "components/Auth/PrivateRoute";
import PublicRoute from "components/Auth/PublicRoute";
import AuthProvider from 'context/AuthContext';
import Nav from 'components/Nav';

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

/*
  TODO: later create a react hook like useAuth that will make a request to the server to authenticate user. This can be done inside the PrivateRoute component so that isAuthed doesn't have to be passed down as a prop.
  toggle isAuthed between true and false to access private/public routes
*/

root.render(
    <React.StrictMode>
        <HelmetWrapper>
            <GlobalStyles/>
            <BrowserRouter>
                <AuthProvider>
                    {/*TODO: Remove the temporary Nav component below */}
                    <Nav/>
                    <App/>
                </AuthProvider>
            </BrowserRouter>
        </HelmetWrapper>
    </React.StrictMode>
);
