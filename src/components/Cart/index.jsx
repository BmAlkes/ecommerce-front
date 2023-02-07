import React, { useContext } from "react";
import "./styles.jsx";
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal,
} from "./styles.jsx";
import Button from "../CustomButton";
import { CartContext } from "../../context/CartContext.jsx";
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
  const { isVisible, toogleCart } = useContext(CartContext);
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toogleCart}></CartEscapeArea>
      <CartContent>
        <div>
          <AiOutlineClose onClick={toogleCart} size={40} />
        </div>
        <CartTitle>Your Cart</CartTitle>

        {/* produtos */}
        <CartTotal>Total: $999</CartTotal>
        <Button>Finish Purchase</Button>
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
