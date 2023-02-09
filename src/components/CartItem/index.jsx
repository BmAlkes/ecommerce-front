import { useContext } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";

// Utilitie

// Styles
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton,
} from "./styles";

const CartItem = ({ img, description, title, price, quantity, id }) => {
  console.log(id);
  const { removeFromCart } = useContext(CartContext);

  const handleRemoveClick = () => {
    removeFromCart(id);
  };

  return (
    <CartItemContainer>
      <CartItemImage src={img} />

      <CartItemInfo>
        <p>{title}</p>
        <p>${price}</p>
        <CartItemQuantity>
          <AiOutlineMinus size={20} />
          <p>{quantity}</p>
          <AiOutlinePlus size={20} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
