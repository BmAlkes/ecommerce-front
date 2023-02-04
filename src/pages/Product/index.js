import React from "react";
import nike from "../../assets/imgs/nike2.png";
import Header from "../../components/Header";
import ImageSlider from "../../components/ImageSlider";
import { ProductContainer, CategoryTitle, ProductsContainer } from "./styles";
import nike3 from "../../assets/imgs/nike3.png";
import Button from "../../components/CustomButton";

const images = [nike, nike, nike3];
console.log(images);
const Product = () => {
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
