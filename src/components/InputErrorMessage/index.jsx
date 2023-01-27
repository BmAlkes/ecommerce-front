import React from "react";
import { InputErrorMessageContainer } from "./styles";

const InputError = ({ children }) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>;
};

export default InputError;
