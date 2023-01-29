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
import { useContext } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

function App() {
  const { currentUser, isAutheticated, loginUser, logoutUser } =
    useContext(AuthContext);
  onAuthStateChanged(auth, async (user) => {
    const isSignout = isAutheticated && !user;
    if (isSignout) {
      return logoutUser();
    }
    const isSignIn = !isAutheticated && user;
    if (isSignIn) {
      const querySnapshot = await getDocs(
        query(collection(db, "users"), where("id", "==", user.uid))
      );
      const userFromFireStore = querySnapshot.docs[0]?.data();
      return loginUser(userFromFireStore);
    }
  });

  console.log({ currentUser });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
