import { useState } from "react";

const useGetInputValues = (initalValues = {}) => {
  const [values, setValues] = useState(initalValues);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const resetHandler = () => {
    setValues(initalValues)
  }

  return { values, changeHandler, resetHandler };
};

export default useGetInputValues;