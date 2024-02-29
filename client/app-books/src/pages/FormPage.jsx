import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";

const FormPage = ({ formTitle, fields, buttonTxt }) => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    navigate("/", {
      state: {
        logged: true,
      },
    });
  };

  return (
    <div className="flex flex-col items-center mt-[10rem] min-h-[30rem] my-30">
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
  );
};

export default FormPage;
