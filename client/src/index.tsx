import React, {useContext} from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "styles/GlobalStyles";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HelmetWrapper from "./components/Helmet";
import AuthProvider from 'context/AuthContext';
import Nav from 'components/Nav';
import App from "App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

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
