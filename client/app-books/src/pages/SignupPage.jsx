import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../hooks/useFormHook";

const SignupPage = () => {
  const navigate = useNavigate();

  const { name, password, onInputChange, onResetForm } = useForm({
    name: '',
    password: '',
  });

  const onSignup = (e) => {
    e.preventDefault();
    navigate("/", {
      replace: true,
      state: {
        logged: true,
        name,
      },
    });
    onResetForm();
  };
  return (
    <div className="flex justify-between items-center bg-gray-50 px-70">
      <div className="  justify-center">
        <h1 className="text-4xl font-semibold">¡Hello!</h1>
        <p className="font-medium text-m text-gray-500 mt-4">
          ¿Don't have an account? Pleas enter your details.
        </p>
      </div>
      <form onSubmit={onSignup} className="">
        <div>
          <label htmlFor="name" className="text-lg font-medium">User name</label>
          <input
            className="w-full border-2 border-gray-300 rounded-xl p-3 mt-1 bg-transparent "
            placeholder="Enter your user name"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label  htmlFor="password" className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-300 rounded-xl p-3 mt-1 bg-transparent"
            placeholder="Enter your password"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 font-medium text-base" htmlFor="rember">
              Remember me.
            </label>
          </div>
          {/* <button className="font-medium text-base text-blue-500">
            ¿Olvidaste tu contraseña?
          </button> */}
        </div>
        <div className="mt-8 ">
          <button className="w-full rounded-xl py-4 bg-buttoncolor text-yellow-400 text-lg font-bold">
            Sign up
          </button>
        </div>
        <div className="mt-8 ">
          <p>¿have an account?</p>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
