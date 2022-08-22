import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "styles/GlobalStyles";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HelmetWrapper from "./components/Helmet"

import App from "./routes/App";
import Login from "./routes/Login";
import Signup from "routes/Signup";
import Search from "routes/Search";
import Settings from "routes/Settings";

import PrivateRoute from "components/Auth/PrivateRoute";
import PublicRoute from "components/Auth/PublicRoute";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

/*
  TODO: later create a react hook like useAuth that will make a request to the server to authenticate user. This can be done inside the PrivateRoute component so that isAuthed doesn't have to be passed down as a prop.
  toggle isAuthed between true and false to access private/public routes
*/
const isAuthed = true 

root.render(
  <React.StrictMode>
    <HelmetWrapper>
      <GlobalStyles />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRoute isAuthed={isAuthed}><App/></PrivateRoute>} />
            <Route path="/search" element={<PrivateRoute isAuthed={isAuthed}><Search/></PrivateRoute>} />
            <Route path="/settings" element={ <PrivateRoute isAuthed={isAuthed}><Settings /></PrivateRoute>} />
            <Route path="/login" element={ <PublicRoute isAuthed={isAuthed}><Login /></PublicRoute>} />
            <Route path="/signup" element={ <PublicRoute isAuthed={isAuthed}><Signup /></PublicRoute>} />
          </Routes>
      </BrowserRouter>
    </HelmetWrapper>
  </React.StrictMode>
);