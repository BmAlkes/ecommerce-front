import React from "react";
import Button from "../CustomButton";

import { Container } from "./styles";

const BigBanner = ({ img }) => {
  return (
    <Container>
      <div>
        <h2>View men's clothing collection</h2>
        <p>Buy the best sneakers on the market, best quality, free delivery</p>
        <Button>Check Now</Button>
      </div>
      <div>
        <img src={img} alt={img} />
      </div>
    </Container>
  );
};

export default BigBanner;
