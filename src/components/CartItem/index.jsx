import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

// Utilitie

// Styles
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton,
} from "./styles";

const CartItem = ({ img, description, title, price, quantity }) => {
  console.log(img, description, title, price, quantity);
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

      <RemoveButton>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
