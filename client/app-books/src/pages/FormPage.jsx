import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { useAuthUser } from "../context/UserSessionLocalProvider";

const FormPage = ({ formTitle, fields, buttonTxt }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  console.log(error);

  const { registerLocal, login, user } = useAuthUser();
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    const newData = { ...data, sessionActive: true };
    if (data && location.pathname === "/signup") {
      registerLocal(newData);
      navigate("/");
    }
    if (data && location.pathname === "/login") {
      const loginResult = login(data);
      if (loginResult) {
        navigate("/");
      } else {
        setError("Credenciales no válidas");
      }
    }
    reset();
  };

  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError(null); // Limpiar el error después de 2 segundos
      }, 2000);

      return () => clearTimeout(timeoutId); // Limpiar el timeout si el componente se desmonta antes
    }
  }, [error]);

  return (
    <>
      <div className="flex flex-col items-center mt-[10rem] min-h-[30rem] my-30">
        {error && (
          <div
            id="toast-warning"
            className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
              </svg>
              <span className="sr-only">Warning icon</span>
            </div>
            <div className="ml-3 text-sm font-normal">{error}</div>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-warning"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}

        <h2 className="text-2xl font-bold mb-5">{formTitle}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          {fields.map((field) => (
            <div key={field.name} className="mb-6 relative">
              {field.type === "select" ? (
                <>
                  <select
                    className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={field.name}
                    name={field.name}
                    {...register(field.name, field.validation)}
                  >
                    <option value="">{field.placeholder}</option>
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-red-500 text-l mt-1">
                    {errors[field.name]?.message}
                  </p>
                </>
              ) : (
                <>
                  <div key={field.name} className="mb-6 relative">
                    <div
                      onClick={() =>
                        field.type === "password" && togglePasswordVisibility()
                      }
                      className={`absolute top-1/2 -translate-y-1/2 right-3 flex items-center pl-3 pointer-events-none text-3xl`}
                    >
                      {field.type === "password" ? (
                        showPassword ? (
                          <AiOutlineUnlock />
                        ) : (
                          <AiOutlineLock />
                        )
                      ) : (
                        field.icon
                      )}
                    </div>
                    <input
                      placeholder={field.placeholder}
                      className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type={
                        field.type === "password"
                          ? showPassword
                            ? "text"
                            : "password"
                          : field.type || "text"
                      }
                      name={field.name}
                      id={field.name}
                      {...register(field.name, field.validation)}
                    />
                    <p className="text-red-500 text-l mt-1">
                      {errors[field.name]?.message}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mb-15 py-4 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            {buttonTxt}
          </button>
        </form>
      </div>
    </>
  );
};

export default FormPage;
