import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../CustomButton";
import { Container } from "./style";

const SquareProduct = ({ id, name, price, img, description }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div className="block">
          <img src={img} alt={name} />
        </div>
        <p>{name}</p>
        <span>{price}</span>
        <Button onClick={() => navigate(`/product/${id}`)}>Buy Now</Button>
      </Container>
    </>
  );
};

export default SquareProduct;
