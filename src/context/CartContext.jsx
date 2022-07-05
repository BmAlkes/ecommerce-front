const { createContext, useContext, useState } = require("react");

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState("");

  function addToCart(item) {}

  function removeFromCart(item) {}

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
