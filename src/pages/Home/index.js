import { RightArrowAlt } from "styled-icons/boxicons-solid";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { Wrapper } from "./styles";

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
      </Wrapper>
    </>
  );
}

export default Home;
