const { createContext, useContext, useState } = require("react");

export const CartContext = createContext({
  products: [],
  cart: [],
  isVisible: false,
  setVisible: () => {},
  toogleCart: () => {},
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isVisible, setVisible] = useState(false);

  function addToCart(item) {
    setCart((prevState) => [...prevState, { ...item, quantity: 1 }]);
  }

  function removeFromCart(item) {}

  const toogleCart = () => {
    setVisible((prevState) => !prevState);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, isVisible, toogleCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
