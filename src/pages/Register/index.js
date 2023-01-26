import React from "react";
import {
  Container,
  LeftArea,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
  RightArea,
} from "./styles";
import nike from "../../assets/imgs/nike2.png";

import Header from "../../components/Header";
import Button from "../../components/CustomButton";
import CustomInput from "../../components/Input";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Header />
      <Container>
        <LeftArea>
          <img src={nike} alt="" />
        </LeftArea>
        <RightArea>
          <LoginHeadline>Register</LoginHeadline>
          <LoginContent>
            <LoginInputContainer>
              <CustomInput placeholder=" Enter your Name"></CustomInput>
            </LoginInputContainer>
            <LoginInputContainer>
              <CustomInput placeholder=" Enter your LastName"></CustomInput>
            </LoginInputContainer>
            <LoginInputContainer>
              <CustomInput placeholder="Enter your Email"></CustomInput>
            </LoginInputContainer>
            <LoginInputContainer>
              <CustomInput placeholder="Enter your Password"></CustomInput>
            </LoginInputContainer>
            <LoginInputContainer>
              <CustomInput placeholder="Confirm Password "></CustomInput>
            </LoginInputContainer>
            <Button>Enter</Button>
            <LoginSubtitle>
              Have a account? <Link to="/login">Login</Link>
            </LoginSubtitle>
          </LoginContent>
        </RightArea>
      </Container>
    </>
  );
};

export default Register;
