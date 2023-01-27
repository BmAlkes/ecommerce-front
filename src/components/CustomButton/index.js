import React from "react";
import { CustomButtonContainer, IconContainer } from "./styles";

const Button = ({ children, ...props }) => {
  return (
    <CustomButtonContainer primary {...props}>
      {children}
    </CustomButtonContainer>
  );
};

export default Button;
