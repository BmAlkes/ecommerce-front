import styled from "styled-components";

const Container = styled.div`
  width: 570px;
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
`;

export { Container };
