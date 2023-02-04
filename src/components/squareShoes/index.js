import React from "react";

import Button from "../CustomButton";
import { Container } from "./style";

const SquareProduct = ({ category }) => {
  console.log(category);
  return (
    <Container>
      <div className="block">
        <img src={category.products[0].imageUrl} alt={category.displayName} />
      </div>
      <p>{category.products[0].name}</p>
      <span>${category.products[0].price}</span>
      <Button>Buy Now</Button>
    </Container>
  );
};

export default SquareProduct;
