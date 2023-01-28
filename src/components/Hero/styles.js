import styled from "styled-components";

const Container = styled.section`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  .container1 {
    padding-left: 41px;
    flex: 1;

    h1 {
      color: ${(props) => props.theme.colors.whiteColor};
      font-size: 40px;
      margin-bottom: 26px;
    }
    p {
      font-size: 18px;
      margin-bottom: 37px;
      color: ${(props) => props.theme.colors.whiteColor};
    }

    .container2 {
      flex: 1;
    }
  }
  @media (max-width: 767px) {
    margin-top: 30px;
    h1 {
      margin: 91px 16px 33px 16px;
    }
    p {
      margin: 0 16px 33px;
    }
    button {
      margin-bottom: 92px;
    }
    img {
      padding: 0px 39px 31px 39px;
    }
  }
`;

export { Container };
