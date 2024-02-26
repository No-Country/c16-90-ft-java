import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userPrueba, setUserPrueba] = useState(false);

  useEffect(() => {
    // Verificar la autenticación del usuario al cargar la aplicación
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      // Realizar una consulta a la base de datos para verificar la autenticación
      const response = await fetch("/api/check-auth"); // Reemplaza con tu ruta real
      const userData = await response.json();

      setUser(userData);
      setLoading(false);
    } catch (error) {
      // Si hay un error, el usuario no está autenticado
      setUser(null);
      setLoading(false);
    }
  };

  // Registro de usuario:
  const signup = async (userData) => {
    try {
      // Lógica para registrar al usuario en la base de datos
      await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }); // Reemplaza con tu ruta real

      // Actualizar el estado del usuario
      setUser(userData);
    } catch (error) {
      // Manejar errores
      throw error;
    }
  };

  // Inicio de sesión de usuario:
  const signin = async (userData, successCallback) => {
    try {
      // Lógica para iniciar sesión del usuario
      await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }); // Reemplaza con tu ruta real

      // Actualizar el estado del usuario
      setUser(userData);

      if (typeof successCallback === "function") {
        successCallback();
      }
    } catch (error) {
      // Manejar errores
      throw error;
    }
  };

  // Función para cerrar sesión del usuario
  const signout = async () => {
    try {
      // Lógica para cerrar sesión del usuario
      await fetch("/api/signout", {
        method: "POST",
      }); // Reemplaza con tu ruta real

      // Limpiar el estado del usuario
      setUser(null);
    } catch (error) {
      // Manejar errores
      throw error;
    }
  };

  // Función para verificar si el usuario está autenticado
  const isUserAuthenticated = () => {
    return user !== null;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        signout,
        isUserAuthenticated,
        loading,
        userPrueba,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};
