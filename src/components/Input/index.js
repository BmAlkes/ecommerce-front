import React from "react";
import { CustomInputContainer } from "./styles";

const CustomInput = React.forwardRef((props, ref) => {
  return <CustomInputContainer ref={ref} {...props}></CustomInputContainer>;
});

export default CustomInput;
