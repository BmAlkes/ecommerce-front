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
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import validator from "validator";
// styles
import Button from "../../components/CustomButton";
import CustomInput from "../../components/Input";
import InputError from "../../components/InputErrorMessage";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSubmitPress = async (data) => {
    try {
    } catch (err) {}
  };

  console.log({ errors });
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
            <Button>
              <BsGoogle size={16} />
              Enter With Google
            </Button>
            <LoginSubtitle>Or enter with your email</LoginSubtitle>
            <LoginInputContainer>
              <p>Email</p>
              <CustomInput
                hasError={!!errors.email}
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  validate: (value) => {
                    return validator.isEmail(value);
                  },
                })}
              />

              {errors.email?.type === "required" && (
                <InputError>Email required</InputError>
              )}
              {errors.email?.type === "validate" && (
                <InputError>Email Invalid</InputError>
              )}
            </LoginInputContainer>
            <LoginInputContainer>
              <p>Password</p>
              <CustomInput
                hasError={!!errors.password}
                placeholder="Enter your password"
                {...register("password", { required: true })}
              ></CustomInput>
              {errors.password?.type === "required" && (
                <InputError> Password required</InputError>
              )}
            </LoginInputContainer>
            <Button onClick={() => handleSubmit(handleSubmitPress)()}>
              Enter
            </Button>
            <LoginSubtitle>
              Don't have a account? <Link to="/register">Register Please</Link>
            </LoginSubtitle>
          </LoginContent>
        </RightArea>
      </Container>
    </>
  );
};

export default Login;
