import React from "react";
import {
  Container,
  LeftArea,
  RightArea,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./styles";
import nike from "../../assets/imgs/nike2.png";
import Header from "../../components/Header";
import { BsGoogle } from "react-icons/bs";

// styles
import Button from "../../components/CustomButton";
import CustomInput from "../../components/Input";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <LeftArea>
          <img src={nike} alt="" />
        </LeftArea>
        <RightArea>
          <LoginHeadline>Login</LoginHeadline>
          <LoginContent>
            <Button props={<BsGoogle size={16} />}>Enter With Google</Button>
            <LoginSubtitle>Or enter with your email</LoginSubtitle>
            <LoginInputContainer>
              <CustomInput placeholder="Email"></CustomInput>
            </LoginInputContainer>
            <LoginInputContainer>
              <CustomInput placeholder="Password"></CustomInput>
            </LoginInputContainer>

            <Button>Enter</Button>
          </LoginContent>
        </RightArea>
      </Container>
    </>
  );
};

export default Login;
