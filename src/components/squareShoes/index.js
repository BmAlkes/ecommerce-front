import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../CustomButton";
import { Container } from "./style";

const SquareProduct = ({ category }) => {
  const navigate = useNavigate();
  return (
    <>
      {category.products.map((product) => {
        return (
          <Container key={product.id}>
            <div className="block">
              <img src={product.imageUrl} alt={product.displayName} />
            </div>
            <p>{product.name}</p>
            <span>{product.price}</span>
            <Button onClick={() => navigate(`/product/${product.id}`)}>
              Buy Now
            </Button>
          </Container>
        );
      })}
    </>
  );
};

export default SquareProduct;
