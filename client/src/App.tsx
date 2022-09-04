import { Route, Routes } from "react-router-dom";
import PrivateRoute from "components/Auth/PrivateRoute";
import Search from "routes/Search";
import Courses from "routes/Courses";
import PublicRoute from "components/Auth/PublicRoute";
import Login from "routes/Login";
import Signup from "routes/Signup";
import React from "react";
import CalendarPage from "routes/Calender";
import { useAuth } from "context/AuthContext";
import Loader from "components/Loader/Loader";

function App() {
  const { isCheckingAuth } = useAuth();

  if (isCheckingAuth) return <Loader />;

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
        path="/courses"
        element={
          <PrivateRoute>
            <Courses />
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
