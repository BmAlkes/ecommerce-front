import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import ImageSlider from "../../components/ImageSlider";
import { ProductContainer, CategoryTitle, ProductsContainer } from "./styles";
import Button from "../../components/CustomButton";
import { CartContext } from "../../context/CartContext.jsx";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import Loading from "../../components/Loading";

const Product = () => {
  const [isLoading, setLoading] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [productId, setProductId] = useState({});

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
  const handleAddToCartClick = () => {
    addToCart(productId);
  };
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
            <h3>${productId.price}</h3>
            <p>{productId?.description}</p>
            <div className="size">
              <ul>
                {productId.sizes?.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            </div>
            <Button onClick={handleAddToCartClick}>Add to Cart</Button>
          </div>
        </ProductContainer>
      </ProductsContainer>
    </>
  );
};

export default Product;
