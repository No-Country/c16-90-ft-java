import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {

  const navigate = useNavigate();


  const {name, password, onInputChange, onResetForm} = useForm({
    name: '',
    password:'',

  });

  const onSignup = (e) => {
    e.preventDefault();
    navigate('/dashboard',{
      replace: true,
      state:{
        logged: true, 
        name,
      },
    });
    onResetForm();
  }
  return (
    <div className="w-auto flex justify-between items-center bg-gray-50 px-10 py-20 rounded-3xl border-2 border-gray-200 ">
      <div className="  justify-center">
        <h1 className="text-4xl font-semibold">¡Hola!</h1>
        <p className="font-medium text-m text-gray-500 mt-4">
          ¿No tienes una cuenta? Por favor ingresa tus datos.
        </p>
      </div>
      <form onChange={onSignup} className="">
        <div>
          <label className="text-lg font-medium">Nombre de usuario</label>
          <input
            className="w-full border-2 border-gray-300 rounded-xl p-3 mt-1 bg-transparent "
            placeholder="Enter your user name"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Contraseña</label>
          <input
            className="w-full border-2 border-gray-300 rounded-xl p-3 mt-1 bg-transparent"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 font-medium text-base" htmlFor="rember">
              Recordarme.
            </label>
          </div>
          {/* <button className="font-medium text-base text-blue-500">
            ¿Olvidaste tu contraseña?
          </button> */}
        </div>
        <div className="mt-8 ">
          <button className="w-full rounded-xl py-4 bg-orange-300 text-white text-lg font-bold">
            Registrarse
          </button>
        </div>
        <div className="mt-8 ">
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/login">
            <button>Entrar</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
