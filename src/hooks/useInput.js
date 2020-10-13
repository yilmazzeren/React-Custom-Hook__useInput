import { useState } from "react";

export const useInput = (params) => {
    // useInput hook içerisine params değerini vermezsek uncontrolled hatası verir. Başlangıç olarak name,age,email degerlerini bo olarak göndermemiz lazım.
  const [inputs, setInputs] = useState(params);

  const handleChange = (event) => {
    // ...önceki inputları açıyoruz
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return [inputs,handleChange];
};
