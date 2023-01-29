import React from "react";
import { useNavigate } from "react-router-dom";

import { Bag, Person } from "styled-icons/bootstrap";
import { Heart } from "styled-icons/fa-solid";
import { Exit } from "styled-icons/boxicons-regular";
import {
  Container,
  HeaderItemsContainer,
  HeaderItem,
  HeaderTitle,
} from "./styles";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";

const Header = () => {
  const navigate = useNavigate();

  const handleLoginPage = () => {
    navigate("/login"); //
  };
  const handleHome = () => {
    navigate("/"); //
  };

  const handleRegister = () => {
    navigate("/register"); //
  };

  return (
    <Container>
      <HeaderTitle onClick={handleHome}>BSHOP</HeaderTitle>
      <HeaderItemsContainer>
        <HeaderItem>
          <Person />
        </HeaderItem>
        <HeaderItem>
          <Heart />
        </HeaderItem>
        <HeaderItem>
          <Exit onClick={() => signOut(auth)} />
        </HeaderItem>
        <HeaderItem>
          <Bag />
          <span>2</span>
        </HeaderItem>
        <HeaderItem onClick={handleRegister}>Register</HeaderItem>
        <HeaderItem onClick={handleLoginPage}>Login</HeaderItem>
      </HeaderItemsContainer>
    </Container>
  );
};

export default Header;
