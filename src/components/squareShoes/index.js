import React from "react";
import { Bag } from "styled-icons/ionicons-sharp";
import { Heart } from "styled-icons/zondicons";
import { Container } from "./style";

const SquareProduct = ({ img, text, price }) => {
  return (
    <Container>
      <div className="block">
        <div>
          <Bag />
          <Heart className="like" />
        </div>
        <img src={img} alt={img} />
      </div>
      <p>{text}</p>
      <span>${price}</span>
    </Container>
  );
};

export default SquareProduct;
