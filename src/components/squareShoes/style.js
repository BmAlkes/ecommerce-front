import styled from "styled-components";

const Container = styled.div`
  width: 370px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 45px;
  @media (max-width: 769px) {
    padding: 0 1rem;
  }

  .block {
    background-color: ${(props) => props.theme.colors.backgroundColor};
  }

  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 16/9;
  }
  p {
    font-size: 24px;
    padding: 10px;
  }
  span {
    color: ${(props) => props.theme.colors.textColor};
    font-size: 32px;
    font-weight: 600;
    padding: 10px;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 67px;
  }
`;

export { Container };
