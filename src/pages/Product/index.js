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

const Product = () => {
  const [isLoading, setLoading] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [productId, setProductId] = useState({});

  console.log();
  const { id } = useParams();
  useEffect(() => {
    const useCollectionRef = collection(db, "products");
    const fetchCategory = async () => {
      try {
        setLoading(true);
        const response = await getDocs(useCollectionRef);
        const data = response.docs.map((doc) => ({
          ...doc.data(),
        }));
        const product = data
          .map((product) => {
            return product;
          })
          .find((product) => {
            return product.id === Number(id);
          });
        setProductId(product);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, []);

  if (isLoading) return <Loading />;
  // const handleAddToCartClick = () => {
  //   addToCart(product);
  // };
  return (
    <>
      <Header />
      <ProductsContainer>
        <CategoryTitle>{productId?.title}</CategoryTitle>
        <ProductContainer>
          <div className="space">
            {productId?.img && <ImageSlider slides={productId?.img} />}
          </div>
          <div className="rightContainer">
            <h2> {productId.title}</h2>
            <h3>$300,00</h3>
            <p>{productId?.description}</p>
            <div className="size">
              <ul>
                {productId.sizes?.map((item) => {
                  return <li>{item}</li>;
                })}
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
