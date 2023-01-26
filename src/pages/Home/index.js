import { RightArrowAlt } from "styled-icons/boxicons-solid";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import SquareProduct from "../../components/squareShoes";
import { Wrapper } from "./styles";
import nike from "../../assets/imgs/nike2.png";
import nike3 from "../../assets/imgs/nike3.png";
import SmallBanner from "../../components/SmallBanner";
import BigBanner from "../../components/BigBanner";

function Home() {
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
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
        </div>
        <div className="banner">
          <SmallBanner img={nike3} />
          <SmallBanner img={nike3} />
        </div>
        <div className=" dividerSection">
          <h2>Products</h2>
          <p>
            See More <RightArrowAlt />
          </p>
        </div>
        <div className="squareProduct">
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
          <SquareProduct text={"Air Max 90"} price={300} img={nike} />
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
