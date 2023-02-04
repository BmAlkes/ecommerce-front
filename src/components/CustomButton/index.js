import React from "react";
import { CustomButtonContainer } from "./styles";

const Button = ({ children, ...props }) => {
  return (
    <CustomButtonContainer primary {...props}>
      {children}
    </CustomButtonContainer>
  );
};

export default Button;
