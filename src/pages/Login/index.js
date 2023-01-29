import React, { useContext, useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import validator from "validator";
// styles
import Button from "../../components/CustomButton";
import CustomInput from "../../components/Input";
import InputError from "../../components/InputErrorMessage";
import {
  AuthErrorCodes,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, googleProvider } from "../../config/firebase.config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { isAutheticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm();

  useEffect(() => {
    if (isAutheticated) {
      navigate("/");
    }
  }, [isAutheticated]);

  const handleSubmitPress = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(userCredential);
    } catch (err) {
      const _error = err;
      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError("password", { type: "mismatch" });
      }
      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError("email", { type: "notFound" });
      }
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider);
      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", userCredentials.user.uid)
        )
      );
      const user = querySnapshot.docs[0]?.data;
      if (!user) {
        const firstname = userCredentials.user.displayName?.split(" ")[0];
        const lastname = userCredentials.user.displayName?.split(" ")[1];
        await addDoc(collection(db, "users"), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstname,
          lastname,
          provider: "google",
        });
      }
    } catch (e) {
      console.log(e);
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
          <LoginHeadline>Login</LoginHeadline>
          <LoginContent>
            <Button onClick={handleSignInWithGoogle}>
              <BsGoogle size={16} />
              Enter With Google
            </Button>
            <LoginSubtitle>Or enter with your email</LoginSubtitle>
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
              {errors.email?.type === "notFound" && (
                <InputError>Email not found</InputError>
              )}
            </LoginInputContainer>
            <LoginInputContainer>
              <p>Password</p>
              <CustomInput
                type="password"
                hasError={!!errors.password}
                placeholder="Enter your password"
                {...register("password", { required: true })}
              ></CustomInput>
              {errors.password?.type === "required" && (
                <InputError> Password required</InputError>
              )}
              {errors.password?.type === "mismatch" && (
                <InputError> Password invalid</InputError>
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
