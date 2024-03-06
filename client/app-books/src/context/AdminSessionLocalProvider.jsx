import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AdminAuthContext = createContext();

export const AdminSessionLocalProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [validateAdmin, setValidateAdmin] = useState(false);

  const navigate = useNavigate();

  const login = (credentials) => {
    const storedAdmins = JSON.parse(localStorage.getItem("admins")) || [];

    const matchedAdmin = storedAdmins.find(
      (admin) =>
        admin.email === credentials.email &&
        admin.password === credentials.password
    );

    if (matchedAdmin) {
      // Credenciales válidas, iniciar sesión
      setAdmin(matchedAdmin);
      setValidateAdmin(true);
      return true;
    } else {
      // Credenciales incorrectas
      setValidateAdmin(false);
      return false;
    }
  };

  const registerLocal = (adminData) => {
    const storedAdmins = JSON.parse(localStorage.getItem("admins")) || [];
    const newAdmins = [...storedAdmins, adminData];

    setAdmin(adminData);
    localStorage.setItem("admins", JSON.stringify(newAdmins));
  };

  const logout = () => {
    // Limpiar el estado y eliminar la información del usuario de Local Storage

    setAdmin(null);
    setValidateAdmin(false);
    localStorage.removeItem("admins");
    navigate("/");
  };

  return (
    <AdminAuthContext.Provider
      value={{ admin, login, logout, registerLocal, validateAdmin }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAuthAdmin = () => useContext(AdminAuthContext);
