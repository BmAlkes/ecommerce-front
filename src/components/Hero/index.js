import React from "react";
import { Container } from "./styles";
import Nike from "../../assets/imgs/nike2.png";
import Button from "../Button";
import { RightArrowAlt } from "styled-icons/boxicons-regular";

const Hero = () => {
  return (
    <Container>
      <div className="container1">
        <h1>Buy the best sneakers on the market at the best prices</h1>
        <p>Buy the best sneakers on the market, best quality, free delivery</p>
        <Button>
          Buy now
          <RightArrowAlt />
        </Button>
      </div>
      <div className="container2">
        <img src={Nike} alt="" className="img" />
      </div>
    </Container>
  );
};

export default Hero;
