import styled from "styled-components";

export const ProductsContainer = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 20px;
  padding-top: 40px;
`;

export const CategoryTitle = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 5px;
  padding-bottom: 10px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 30px;
  border-bottom: 3px solid ${(props) => props.theme.colors.line};
  width: 100%;
  letter-spacing: 0.3rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .space {
    width: 600px;
    height: 580px;
  }
  .rightContainer {
    width: 500px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
    h2 {
      font-size: 48px;
      font-weight: 400;
      letter-spacing: 0.3rem;
      margin-bottom: 1rem;
    }
    h3 {
      font-family: "Lexend";
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 135%;
      margin-bottom: 1rem;
    }
    p {
      font-family: "Lexend";
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 149%;
      color: #414160;
      margin-bottom: 1rem;
    }
    ul {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px;
      gap: 16px;
      margin-bottom: 1rem;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 51px;
        font-size: 25px;
        color: ${(props) => props.theme.colors.primaryColor};
        background: #ffffff;
        border: 2px solid rgba(188, 188, 255, 0.59);
        border-radius: 7px;
      }
    }
  }
`;
