import React, { useState } from "react";

const FormReu = ({ formTitle, fields, onSubmit, buttonTxt }) => {
  const initialState = Object.fromEntries(
    fields.map((field) => [field.name, ""])
  );

  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(formValues);
    }
  };

  return (
    <section className=" p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 max-w-lg mt-[10rem]">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        {formTitle}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 mt-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor={field.name}
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type || "text"} // Puedes especificar un tipo predeterminado
                value={formValues[field.name]}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-graydark rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            {buttonTxt}
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormReu;
