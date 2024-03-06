import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserAuthContext = createContext();

export const UserSessionLocalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [sessionActive, setSessionActive] = useState(false);

  const navigate = useNavigate();

  const login = (credentials) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUserIndex = storedUsers.findIndex(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password
    );

    if (matchedUserIndex !== -1) {
      // Credenciales válidas, iniciar sesión
      // Encontrar el usuario actual en la lista
      const updatedUsers = [...storedUsers];
      updatedUsers[matchedUserIndex].sessionActive = true;

      // Guardar la lista actualizada en el localStorage
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      setUser(updatedUsers[matchedUserIndex]);
      setSessionActive(true);
      return true;
    } else {
      // Credenciales incorrectas

      return false;
    }
  };

  const registerLocal = (userData) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const newUsers = [...storedUsers, userData];

    setUser(userData);
    setSessionActive(userData.sessionActive); // Establecer el estado de la sesión activa
    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  const logout = () => {
    // Obtener usuarios almacenados
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Encontrar el usuario actual en la lista
    const updatedUsers = storedUsers.map((userItem) => {
      if (userItem.email === user.email) {
        // Actualizar la propiedad sessionActive a false
        return { ...userItem, sessionActive: false };
      }
      return userItem;
    });

    // Guardar la lista actualizada en el localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUser(null);
    setSessionActive(false);

    // Navegar a la página principal
    navigate("/");
  };

  return (
    <UserAuthContext.Provider
      value={{
        user,
        login,
        logout,
        registerLocal,
        sessionActive,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useAuthUser = () => useContext(UserAuthContext);
