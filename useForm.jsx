import React from "react";
import { useState } from "react";

const useForm = (defaultValue = {}) => {
  const [values, setValues] = useState(defaultValue);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return {
    handleOnchange,
    values,
  };
};

export default useForm;
