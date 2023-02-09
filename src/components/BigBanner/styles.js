import styled from "styled-components";

const Container = styled.div`
  max-width: 1170px;
  height: 388px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.primaryColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 114px;
  @media (max-width: 769px) {
    flex-direction: column;
    padding: 0 1rem;
  }

  h2 {
    font-size: 40px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.whiteColor};
    max-width: 474px;
    margin-bottom: 42px;
  }
  p {
    color: ${(props) => props.theme.colors.whiteColor};
    max-width: 474px;
    margin-bottom: 54px;
  }
  img {
    width: 413px;
    height: 285px;
    object-fit: cover;
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export { Container };
