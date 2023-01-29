import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  h2 {
    color: ${(props) => props.theme.colors.whiteColor};
    font-size: 26px;
    padding: 16px 32px;
    font-weight: bold;
  }

  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 16/9;
    padding: 10px;
  }
  button {
    border-radius: 7px;
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
