import styled from "styled-components";

export const ProductsContainer = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 20px;
  padding-top: 40px;

  @media (max-width: 768px) {
    padding: 20px 1rem;
  }
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
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
    width: 100%;
  }
  .space {
    width: 600px;
    height: 580px;
    @media (max-width: 768px) {
      max-width: 300px;
      margin: 0;
      padding: 0;
    }
  }
  .rightContainer {
    max-width: 500px;
    height: 450px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 3rem;
      font-weight: 400;
      letter-spacing: 0.3rem;
      @media (max-width: 768px) {
        font-size: 2rem;
        max-width: 380px;
      }
    }
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      line-height: 135%;
      padding: 0.5rem 0;
    }
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 1.2rem;
      line-height: 149%;
      color: #414160;
      padding: 1rem 0;
    }
    ul {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px;
      gap: 16px;

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
        margin: 1rem 0;
      }
    }
  }
`;
