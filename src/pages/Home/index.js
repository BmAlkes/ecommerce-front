import { RightArrowAlt } from "styled-icons/boxicons-solid";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import SquareProduct from "../../components/squareShoes";
import { Wrapper } from "./styles";

import nike3 from "../../assets/imgs/nike3.png";
import SmallBanner from "../../components/SmallBanner";
import BigBanner from "../../components/BigBanner";
import { CategorieContext } from "../../context/CategorieContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { categories, fetchCategories } = useContext(CategorieContext);

  useEffect(() => {
    fetchCategories();
  }, []);
  console.log(categories);

  return (
    <>
      <Wrapper>
        <Header />
        <Hero />
        <div className=" dividerSection">
          <h2
            onClick={() => {
              navigate("/products");
            }}
          >
            Releases
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
            <SquareProduct category={category} />
          ))}
          {categories.map((category) => (
            <SquareProduct category={category} />
          ))}
          {categories.map((category) => (
            <SquareProduct category={category} />
          ))}
          {categories.map((category) => (
            <SquareProduct category={category} />
          ))}
          {categories.map((category) => (
            <SquareProduct category={category} />
          ))}
          {categories.map((category) => (
            <SquareProduct category={category} />
          ))}
        </div>
        <div className="banner">
          <SmallBanner
            phrase="See Men's Clothing Collection"
            image={nike3}
            name="nike"
          />
          <SmallBanner
            phrase="See Womans Clothing Collection"
            image={nike3}
            name="nike"
          />
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
            <SquareProduct category={category} />
          ))}
          {categories.map((category) => (
            <SquareProduct category={category} />
          ))}
          {categories.map((category) => (
            <SquareProduct category={category} />
          ))}
          {categories.map((category) => (
            <SquareProduct category={category} />
          ))}
          {categories.map((category) => (
            <SquareProduct category={category} />
          ))}
          {categories.map((category) => (
            <SquareProduct category={category} />
          ))}
          {categories.map((category) => (
            <SquareProduct category={category} />
          ))}
          {categories.map((category) => (
            <SquareProduct category={category} />
          ))}
          {categories.map((category) => (
            <SquareProduct category={category} />
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
