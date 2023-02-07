import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 388px;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  h2 {
    color: ${(props) => props.theme.colors.whiteColor};
    font-size: 26px;
    padding: 10px;
    font-weight: bold;
  }

  img {
    width: 100%;
    max-width: 250px;
    object-fit: cover;
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
