import { RightArrowAlt } from "styled-icons/boxicons-solid";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import SquareProduct from "../../components/squareShoes";
import { Wrapper } from "./styles";
import nike from "../../assets/imgs/nike2.png";
import nike3 from "../../assets/imgs/nike3.png";
import SmallBanner from "../../components/SmallBanner";
import BigBanner from "../../components/BigBanner";
import { CategorieContext } from "../../context/CategorieContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryOverview from "../../components/CategoryOverview";
import ProductItem from "../../components/ProductItem";

function Home() {
  const navigate = useNavigate();
  const { categories, fetchCategories } = useContext(CategorieContext);

  useEffect(() => {
    fetchCategories();
  }, []);
  const shoes = categories[0]?.shoes;

  return (
    <>
      <Wrapper>
        <Header />
        <Hero />
        <div className=" dividerSection">
          <h2>Releases</h2>
          <p>
            See More <RightArrowAlt />
          </p>
        </div>
        <div className="squareProduct">
          {categories.map((category) => (
            <CategoryOverview category={category} key={category.id} />
          ))}
        </div>
        <div className="banner">
          {categories.map((category) => (
            <SmallBanner category={category} key={category.id} />
          ))}
        </div>
        <div className=" dividerSection">
          <h2
            onClick={() => {
              navigate("/products");
            }}
          >
            Products
          </h2>
          <p
            onClick={() => {
              navigate("/products");
            }}
          >
            See More <RightArrowAlt />
          </p>
        </div>
        <div className="squareProduct">
          {categories.map((category) => (
            <CategoryOverview category={category} key={category.id} />
          ))}
        </div>
        <BigBanner img={nike3} />
        <footer>
          <p> Created by: Bruno Malkes 2022 © all rights reserved</p>
          <p>Design by:Edmar Alencar 2022 © All Rights reserved</p>
        </footer>
      </Wrapper>
    </>
  );
}

export default Home;
