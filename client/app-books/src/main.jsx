import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthUserProvider.jsx";
import { AdminSessionLocalProvider } from "./context/AdminSessionLocalProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminSessionLocalProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </AdminSessionLocalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
