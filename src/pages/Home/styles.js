import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;

  .dividerSection {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    border-bottom: 3px solid ${(props) => props.theme.colors.line};

    h2 {
      color: ${(props) => props.theme.colors.textColor};
      font-size: 40px;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 145px;
      color: ${(props) => props.theme.colors.textColor2};
      font-size: 18px;
    }
    svg {
      width: 40px;
    }
  }
  .squareProduct {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    flex-wrap: wrap;
  }
  .banner {
    display: flex;
    gap: 26px;
  }
  footer {
    text-align: center;
    font-size: 16px;
    color: #666666;
  }
  footer p {
    margin: 12px;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    .dividerSection {
      margin-top: 110px;
    }
    .squareProduct {
      grid-template-columns: 1fr;
      margin-top: 42px;
    }
    .banner {
      flex-direction: column;
      margin: auto;
      gap: 26px;
    }
  }
`;
