import React from "react";
import Button from "../CustomButton";
import { Container } from "./styles";

const SmallBanner = ({ img }) => {
  return (
    <Container>
      <h2>View men's clothing collection</h2>
      <div>
        <Button>Buy Now</Button>
        <img src={img} alt={img} />
      </div>
    </Container>
  );
};

export default SmallBanner;
