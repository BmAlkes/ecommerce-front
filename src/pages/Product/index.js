import React, { useContext, useEffect, useState } from "react";
import nike from "../../assets/imgs/nike2.png";
import Header from "../../components/Header";
import ImageSlider from "../../components/ImageSlider";
import { ProductContainer, CategoryTitle, ProductsContainer } from "./styles";
import nike3 from "../../assets/imgs/nike3.png";
import Button from "../../components/CustomButton";
import { CartContext } from "../../context/CartContext.jsx";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import Loading from "../../components/Loading";
import { CategorieContext } from "../../context/CategorieContext";

const images = [nike, nike, nike3];
const Product = () => {
  const [isLoading, setLoading] = useState(false);
  const [category, setCategory] = useState(null);
  const { addToCart } = useContext(CartContext);

  const { categories, fetchCategories } = useContext(CategorieContext);

  useEffect(() => {
    fetchCategories();
  }, []);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const useCollectionRef = collection(db, "categories");
    const fetchCategory = async () => {
      try {
        setLoading(true);
        const response = await getDocs(useCollectionRef);
        const data = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const product = data.map((item) => {
          return item.products;
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, []);

  if (isLoading) return <Loading />;

  // console.log(category);

  // const handleAddToCartClick = () => {
  //   addToCart(product);
  // };
  return (
    <>
      <Header />
      <ProductsContainer>
        <CategoryTitle>Air Max 90</CategoryTitle>
        <ProductContainer>
          <div className="space">
            <ImageSlider slides={images} />
          </div>
          <div className="rightContainer">
            <h2> Air Max 90</h2>
            <h3>$300,00</h3>
            <p>
              Buy the best shoes on the market Buy the best shoes on the market.
              The best shoes on the market. Buy the best shoes on the market Buy
              the best shoes on the market. The best shoes on the market
            </p>
            <div className="size">
              <ul>
                <li>S</li>
                <li>M</li>
                <li>G</li>
                <li>XG</li>
              </ul>
            </div>
            <Button>Buy Now</Button>
          </div>
        </ProductContainer>
      </ProductsContainer>
    </>
  );
};

export default Product;
