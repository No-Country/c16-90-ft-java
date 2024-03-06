import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthUserProvider.jsx";
<<<<<<< HEAD
import FavoritesProvider from "./hooks/FavReadWish.jsx";
=======
import { AdminSessionLocalProvider } from "./context/AdminSessionLocalProvider.jsx";
import { UserSessionLocalProvider } from "./context/UserSessionLocalProvider.jsx";
>>>>>>> 2d9b6fa8865593a8c3c79b6da9763d5de22401b4

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <AuthProvider>
        <FavoritesProvider>
        <App />
        </FavoritesProvider>
      </AuthProvider>
=======
      <AdminSessionLocalProvider>
        <UserSessionLocalProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </UserSessionLocalProvider>
      </AdminSessionLocalProvider>
>>>>>>> 2d9b6fa8865593a8c3c79b6da9763d5de22401b4
    </BrowserRouter>
  </React.StrictMode>
);
