import React from "react";
import Button from "../CustomButton";
import { Container } from "./styles";

const SmallBanner = ({ category }) => {
  return (
    <Container>
      <h2>{category.phrase}</h2>
      <img src={category.imageUrl} alt={category.name} />
      <Button>Buy Now</Button>
    </Container>
  );
};

export default SmallBanner;
