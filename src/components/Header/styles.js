import styled from "styled-components";

const Container = styled.header`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 34px;
  p {
    color: ${(props) => props.theme.colors.primaryColor};
    font-weight: bold;
    font-size: 32px;
  }

  .listIcon {
    display: flex;
    gap: 16px;
  }
  .listIcon li {
    width: 28px;
  }
  @media (max-width: 768px) {
    justify-content: space-around;
    margin-bottom: 30px;
  }
`;

export { Container };
