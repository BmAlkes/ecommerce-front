import React from "react";
import Button from "../CustomButton";
import { Container } from "./styles";

const SmallBanner = ({ phrase, image, name }) => {
  return (
    <Container>
      <div>
        <h2>{phrase}</h2>

        <Button>Buy Now</Button>
      </div>
      <img src={image} alt={name} />
    </Container>
  );
};

export default SmallBanner;
