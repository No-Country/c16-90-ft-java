import React from "react";
import { ERROR_SIGNIN, ERROR_SIGNUP } from "../constants/message";

const auth = () => {
  // Registro de administrador:
  const adminSignup = async (admin) => {
    try {
      const response = await http.post("api/admin/signup", admin);
      return response;
    } catch (error) {
      throw new Error(ERROR_SIGNUP);
    }
  };

  // Inicio de sesión de administrador:
  const adminSignin = async (admin, successCallBack) => {
    try {
      const response = await http.post("api/admin/signin", admin);
      adminAuthenticate(response.data, successCallBack);

      return response;
    } catch (error) {
      throw new Error(ERROR_SIGNIN);
    }
  };

  // Función para autenticar al administrador y almacenar el token JWT en el almacenamiento local
  const adminAuthenticate = (data, successCallback) => {
    if (typeof window !== "undefined") {
      const adminJson = JSON.stringify(data);
      localStorage.setItem("adminJwt", adminJson);
      if (typeof successCallback === "function") {
        successCallback();
      }
    }
  };

  // Función para verificar si el administrador está autenticado
  const isAdminAuthenticated = () => {
    if (typeof window === "undefined") {
      return false;
    }
    const adminJwt = localStorage.getItem("adminJwt");
    return adminJwt ? true : false;
  };

  return {
    adminSignin,
    adminSignup,
  };
};

export default auth;
