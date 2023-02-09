const { createContext, useContext, useState } = require("react");

export const CartContext = createContext({
  cart: [],
  isVisible: false,
  setVisible: () => {},
  toogleCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isVisible, setVisible] = useState(false);

  const addToCart = (product) => {
    //verificar se o produto ja esta no carrinho

    const productAlreadyInCart = cart.some((item) => item.id === product.id);

    // se estiver aumentar quantidade
    if (productAlreadyInCart) {
      return setCart((products) =>
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
    // se nao adiciona-lo
    setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  function removeFromCart(productId) {
    setCart((cart) => cart.filter((item) => item.id !== productId));
  }

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
