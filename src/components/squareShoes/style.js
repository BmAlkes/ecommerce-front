import styled from "styled-components";

const Container = styled.div`
  width: 370px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 45px;

  .block {
    background-color: ${(props) => props.theme.colors.backgroundColor};
  }

  img {
    padding: 10px;
    width: 100%;
    object-fit: contain;
    aspect-ratio: 1/1;
  }
  p {
    font-size: 24px;
    margin: 10px 0;
  }
  span {
    color: ${(props) => props.theme.colors.textColor};
    font-size: 32px;
    font-weight: 600;
    padding: 10px 0;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 67px;
  }
`;

export { Container };
