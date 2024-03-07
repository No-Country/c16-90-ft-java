import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthUserProvider.jsx";
import FavoritesProvider from "./hooks/FavReadWish.jsx";
import { AdminSessionLocalProvider } from "./context/AdminSessionLocalProvider.jsx";
import { UserSessionLocalProvider } from "./context/UserSessionLocalProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminSessionLocalProvider>
        <UserSessionLocalProvider>
          <AuthProvider>
            <FavoritesProvider>
              <App />
            </FavoritesProvider>
          </AuthProvider>
        </UserSessionLocalProvider>
      </AdminSessionLocalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
