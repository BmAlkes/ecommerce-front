import React from "react";
import { Container } from "./styles";
import Button from "../../components/Button";

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
