import styled from "styled-components";

const Container = styled.div`
  max-width: 570px;
  height: 388px;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: 5px;
  h2 {
    color: ${(props) => props.theme.colors.whiteColor};
    font-size: 40px;
    padding: 32px 220px 16px 32px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      margin: 16px 79px 143px 32px;
    }
  }
  @media (max-width: 768px) {
    h2 {
      padding: 32px 50px 16px 32px;
    }
    div {
      flex-direction: column;
      button {
        margin-bottom: 10px;
      }
      img {
        width: 200px;
      }
    }
  }
`;

export { Container };
