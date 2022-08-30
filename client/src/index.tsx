import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import HelmetWrapper from "./components/Helmet";
import AuthProvider from "context/AuthContext";
import App from "App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HelmetWrapper>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </HelmetWrapper>
  </React.StrictMode>,
);
