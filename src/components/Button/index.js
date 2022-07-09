import React from "react";
import { Container } from "./styles";

const Button = ({ children }) => {
  return <Container primary>{children}</Container>;
};

export default Button;
