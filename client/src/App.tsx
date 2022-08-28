import { Route, Routes } from "react-router-dom";
import PrivateRoute from "components/Auth/PrivateRoute";
import Search from "routes/Search";
import Settings from "routes/Settings";
import PublicRoute from "components/Auth/PublicRoute";
import Login from "routes/Login";
import Signup from "routes/Signup";
import React from "react";
import CalendarPage from "routes/Calender";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <CalendarPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/search"
        element={
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
    </Routes>
  );
}

export default App;
