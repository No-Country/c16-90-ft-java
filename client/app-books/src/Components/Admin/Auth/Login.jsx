import React, { useState } from "react";
import { useForm } from "react-hook-form";
import auth from "../../../services/auth";
import { Link } from "react-router-dom";
import { SUCCESS_LOGIN, ERROR_LOGIN } from "../../../constants/message";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [active, setActive] = useState(false);

  const { adminSignin } = auth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const toggleModal = () => {
    setActive(!active);
  };

  const onSubmit = async (data) => {
    const admin = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await adminSignin(admin);
      if (response.status === 200) {
        setSuccess(SUCCESS_LOGIN);
        setTimeout(() => {
          setSuccess(""); // Borra el mensaje de éxito después de 2 segundos
        }, 3000); // 2000 milisegundos (2 segundos)
      }
    } catch (error) {
      setError(ERROR_LOGIN);
      setTimeout(() => {
        setError(""); // Borra el mensaje de éxito después de 2 segundos
      }, 3000); // 2000 milisegundos (2 segundos)
    }

    reset();
  };
  return (
    <section className=" p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 max-w-lg mt-[10rem]">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Login
      </h2>
      {success && (
        <div
          id="toast-success"
          className="flex items-center w-full p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200 ">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ml-3 text-sm font-normal">{success}</div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
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
      <form className="space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 mt-4">
          <label htmlFor="email" className="text-gray-700 dark:text-gray-200">
            Your email
          </label>
          <input
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Email is not valid",
              },
            })}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            placeholder="name@company.com"
          />
          {errors.email && (
            <span className="block text-red-600 text-[15px] font-bold">
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-gray-700 dark:text-gray-200"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 10,
                message: "The password must be at least 10 characters long",
              },
            })}
            placeholder="••••••••"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
          {errors.password && (
            <span className="block text-red-600 text-[15px] font-bold">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-graydark rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Login to your account
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <Link
            to="/admin/signup"
            className="text-blue-700 hover:underline dark:text-blue-500"
            onClick={toggleForm}
          >
            Create account
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
