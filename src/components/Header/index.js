import React, { useContext } from "react";
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
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const { isAutheticated } = useContext(AuthContext);
  const { toogleCart, cart } = useContext(CartContext);

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
        {isAutheticated && (
          <>
            <HeaderItem>
              <Person />
            </HeaderItem>
            <HeaderItem>
              <Heart />
            </HeaderItem>
            <HeaderItem onClick={toogleCart}>
              <Bag />
              <span>{cart.length}</span>
            </HeaderItem>
            <HeaderItem>
              <Exit onClick={() => signOut(auth)} />
            </HeaderItem>
          </>
        )}
        {!isAutheticated && (
          <>
            <HeaderItem onClick={handleRegister}>Register</HeaderItem>
            <HeaderItem onClick={handleLoginPage}>Login</HeaderItem>
          </>
        )}
      </HeaderItemsContainer>
    </Container>
  );
};

export default Header;
