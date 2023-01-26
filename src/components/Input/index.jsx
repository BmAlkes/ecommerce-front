import React from "react";
import { CustomInputContainer } from "./styles";

const CustomInput = ({ hasError, ...rest }) => {
  return (
    <CustomInputContainer hasError={hasError} {...rest}></CustomInputContainer>
  );
};

export default CustomInput;
