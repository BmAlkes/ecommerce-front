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
import { useForm } from "react-hook-form";
import nike from "../../assets/imgs/nike2.png";

import Header from "../../components/Header";
import Button from "../../components/CustomButton";
import CustomInput from "../../components/Input";
import { Link } from "react-router-dom";
import validator from "validator";
import InputError from "../../components/InputErrorMessage";
import {
  createUserWithEmailAndPassword,
  AuthError,
  AuthErrorCodes,
} from "firebase/auth";
import { auth, db } from "../../config/firebase.config";
import { addDoc, collection } from "firebase/firestore";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
  } = useForm();

  const watchPassword = watch("password");

  const handleSubmitPress = async (data) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(userCredentials);
      await addDoc(collection(db, "users"), {
        id: userCredentials.user.uid,
        name: data.name,
        lastname: data.lastname,
        email: userCredentials.user.email,
      });
    } catch (error) {
      const _error = error;
      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError("email", { type: "alredyInUse" });
      }
    }
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
          <LoginHeadline>Register</LoginHeadline>
          <LoginContent>
            <LoginInputContainer>
              <p>Name</p>
              <CustomInput
                hasError={!!errors.name}
                placeholder=" Enter your Name"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <InputError>Name required</InputError>
              )}
            </LoginInputContainer>
            <LoginInputContainer>
              <p>LastName</p>
              <CustomInput
                hasError={!!errors.lastname}
                placeholder=" Enter your LastName"
                {...register("lastname", { required: true })}
              />
              {errors.lastname?.type === "required" && (
                <InputError> LastName required</InputError>
              )}
            </LoginInputContainer>
            <LoginInputContainer>
              <p>Email</p>
              <CustomInput
                type="email"
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
              {errors.email?.type === "alredyInUse" && (
                <InputError>Email already in use </InputError>
              )}
            </LoginInputContainer>
            <LoginInputContainer>
              <p>Password</p>
              <CustomInput
                type="password"
                hasError={!!errors.password}
                placeholder="Enter your Password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <InputError> Password required</InputError>
              )}
              {errors.password?.type === "minLength" && (
                <InputError> Password must be up to 6 caracteres</InputError>
              )}
            </LoginInputContainer>
            <LoginInputContainer>
              <p>Confirm Password</p>
              <CustomInput
                hasError={!!errors.password2}
                type="password"
                placeholder="Confirm Password "
                {...register("password2", {
                  required: true,
                  minLength: 6,
                  validate: (value) => {
                    return value === watchPassword;
                  },
                })}
              />
              {errors?.password2?.type === "validate" && (
                <InputError>
                  Confirmation password need to be the same as password
                </InputError>
              )}
              {errors?.password2?.type === "minLenght" && (
                <InputError>Password must be up to 6 caracteres</InputError>
              )}
            </LoginInputContainer>
            <Button onClick={() => handleSubmit(handleSubmitPress)()}>
              Enter
            </Button>
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
