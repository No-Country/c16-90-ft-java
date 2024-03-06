import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthUserProvider.jsx";
import FavoritesProvider from "./hooks/FavReadWish.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FavoritesProvider>
        <App />
        </FavoritesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
