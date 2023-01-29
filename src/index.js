import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { CategorieProvider } from "./context/CategorieContext";
import { GlobalStyles } from "./styles/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CategorieProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategorieProvider>
    </AuthProvider>
    <GlobalStyles />
  </React.StrictMode>
);
