const { createContext, useContext, useState, useMemo } = require("react");

export const CartContext = createContext({
  cart: [],
  isVisible: false,
  productTotalPrice: 0,
  setVisible: () => {},
  toogleCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  decreaseProductFromQuantity: () => {},
  increaseProductFromQuantity: () => {},
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isVisible, setVisible] = useState(false);

  const productTotalPrice = useMemo(() => {
    return cart.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.quantity;
    }, 0);
  }, [cart]);
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

  const increaseProductFromQuantity = (productId) => {
    setCart((cart) =>
      cart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseProductFromQuantity = (productId) => {
    setCart((cart) =>
      cart
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const toogleCart = () => {
    setVisible((prevState) => !prevState);
  };
  console.log(productTotalPrice);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        isVisible,
        toogleCart,
        increaseProductFromQuantity,
        decreaseProductFromQuantity,
        productTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
