import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { Bag, Person } from "styled-icons/bootstrap";
import { Heart } from "styled-icons/fa-solid";

const Header = () => {
  return (
    <Container>
      <Link to={"/"}>
        <p>Bshop</p>
      </Link>
      <ul className="listIcon">
        <li>
          <Person />
        </li>
        <li>
          <Bag />
        </li>
        <li>
          <Heart />
        </li>
      </ul>
    </Container>
  );
};

export default Header;
