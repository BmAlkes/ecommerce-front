import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.config";

const { createContext, useContext, useState, useEffect } = require("react");

export const CategorieContext = createContext({
  categories: [],
  fetchCategories: () => {},
});

export function CategorieProvider({ children }) {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore = [];
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data());
      });
      setCategories(categoriesFromFirestore);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CategorieContext.Provider value={{ categories, fetchCategories }}>
      {children}
    </CategorieContext.Provider>
  );
}
