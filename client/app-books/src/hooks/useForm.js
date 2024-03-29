import { React, useState } from "react";

const useForm = (initialForm = {}) => {
  const [formState, setFormaState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormaState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormaState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};

export default useForm;
