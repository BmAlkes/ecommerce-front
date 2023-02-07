import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthContext } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Product from "./pages/Product";
import theme from "./styles/theme";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./config/firebase.config";
import { useContext, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import Loading from "./components/Loading";
import Cart from "./components/Cart";

function App() {
  const [isInitializing, setIsInitializing] = useState(true);

  const { currentUser, isAutheticated, loginUser, logoutUser } =
    useContext(AuthContext);

  onAuthStateChanged(auth, async (user) => {
    const isSignout = isAutheticated && !user;
    if (isSignout) {
      logoutUser();
      return setIsInitializing(false);
    }
    const isSignIn = !isAutheticated && user;
    if (isSignIn) {
      const querySnapshot = await getDocs(
        query(collection(db, "users"), where("id", "==", user.uid))
      );
      const userFromFireStore = querySnapshot.docs[0]?.data();
      loginUser(userFromFireStore);
      return setIsInitializing(false);
    }
    return setIsInitializing(false);
  });

  console.log({ currentUser });
  if (isInitializing) return <Loading />;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Cart />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
