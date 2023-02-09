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
import CartItem from "../CartItem/index.jsx";

const Cart = () => {
  const { isVisible, toogleCart, cart } = useContext(CartContext);
  console.log(cart);
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toogleCart}></CartEscapeArea>
      <CartContent>
        <div>
          <AiOutlineClose onClick={toogleCart} size={40} />
        </div>
        <CartTitle>Your Cart</CartTitle>

        {/* produtos */}
        {cart.map((cart) => {
          return (
            <CartItem
              key={cart.id}
              img={cart?.img}
              title={cart?.title}
              size={cart?.size}
              description={cart?.description}
              quantity={cart?.quantity}
              price={cart?.price}
              id={cart.id}
            />
          );
        })}
        <CartTotal>Total: $999</CartTotal>
        <Button>Finish Purchase</Button>
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
