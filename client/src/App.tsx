import { Route, Routes } from "react-router-dom";
import PrivateRoute from "components/Auth/PrivateRoute";
import Search from "routes/Search";
import Settings from "routes/Settings";
import PublicRoute from "components/Auth/PublicRoute";
import LandingPage from "routes/LandingPage";
import Login from "routes/Login";
import Signup from "routes/Signup";
import React from "react";
import CalendarPage from "routes/Calender";
import { useAuth } from "context/AuthContext";
import Loader from "components/Loader/Loader";
import PageNotFound from "routes/404";

function App() {
  const { isCheckingAuth } = useAuth();

  if (isCheckingAuth) return <Loader />;

  return (
    <Routes>
      <Route
        path="/" 
        element={
          <PublicRoute>
            <LandingPage />
          </PublicRoute>
        } />
      <Route
        path="/my-notum"
        element={
          <PrivateRoute>
            <CalendarPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-notum/search"
        element={
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-notum/settings"
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
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
