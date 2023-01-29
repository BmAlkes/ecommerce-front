import React from "react";
import { Bag } from "styled-icons/ionicons-sharp";
import { Heart } from "styled-icons/zondicons";
import { Container } from "./style";

const SquareProduct = ({ category }) => {
  console.log(category);
  return (
    <Container>
      {/* <div className="block">
        <div>
          <Bag />
          <Heart className="like" />
        </div>

        <img src={products.imageUrl} alt={products.name} />
      </div>
      <p>{products.name}</p>
      <span>${products.price}</span> */}
    </Container>
  );
};

export default SquareProduct;
