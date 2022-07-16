import React from "react";
import Header from "../../components/Header";
import { Container } from "./styles";
import nike from "../../assets/imgs/nike2.png";
import SquareProduct from "../../components/squareShoes";

const Products = () => {
  return (
    <Container>
      <Header />
      <div className="dividerSection">
        <h2>Product</h2>
      </div>
      <div className="optionsLine">
        <div>
          <select name="colection" id="colection">
            <option value="coletion" selected disabled hidden>
              collection
            </option>
            <option value="Men">Men</option>
            <option value="Woman">Woman</option>
            <option value="kids">Kids</option>
            <option value="all">All</option>
          </select>
          <select name="Size" id="Size">
            <option value="Size" selected disabled hidden>
              Size
            </option>
            <option value="">45</option>
            <option value="">44</option>
            <option value="">43</option>
            <option value="all">All</option>
          </select>
        </div>
        <div>
          <select name="sort" id="sort">
            <option value="sort" selected disabled hidden>
              sort by: cheapest
            </option>
            <option value="">45</option>
            <option value="">44</option>
            <option value="">43</option>
            <option value="all">All</option>
          </select>
        </div>
      </div>
      <div className="squareProduct">
        <SquareProduct text={"Air Max 90"} price={300} img={nike} />
        <SquareProduct text={"Air Max 90"} price={300} img={nike} />
        <SquareProduct text={"Air Max 90"} price={300} img={nike} />
        <SquareProduct text={"Air Max 90"} price={300} img={nike} />
        <SquareProduct text={"Air Max 90"} price={300} img={nike} />
        <SquareProduct text={"Air Max 90"} price={300} img={nike} />
      </div>
    </Container>
  );
};

export default Products;
