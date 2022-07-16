import styled from "styled-components";

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  .dividerSection {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    border-bottom: 3px solid ${(props) => props.theme.colors.line};
  }
  h2 {
    color: ${(props) => props.theme.colors.textColor};
    font-size: 40px;
  }
  .optionsLine {
    display: flex;
    justify-content: space-between;
    select {
      border: none;
      font-size: 18px;
      margin-right: 20px;
    }
  }
  .squareProduct {
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    .squareProduct {
      grid-template-columns: 1fr;
    }
  }
`;

export { Container };
