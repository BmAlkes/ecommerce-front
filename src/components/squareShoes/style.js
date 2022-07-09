import styled from "styled-components";

const Container = styled.div`
  width: 370px;
  height: 432px;
  margin-bottom: 67px;

  .block {
    background-color: ${(props) => props.theme.colors.backgroundColor};
  }
  .block div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 16px;
  }
  .block div svg {
    width: 38px;
    height: 39px;
    margin-top: 16px;
    color: ${(props) => props.theme.colors.secondaryColor};
    border: 1px solid ${(props) => props.theme.colors.secondaryColor};
    border-radius: 7px;
    padding: 5px;
  }
  .block div svg:first-child {
    margin-right: 16px;
  }
  img {
    padding: 39px 16px 75px 17px;
  }
  p {
    font-size: 24px;
    margin: 16px 0px;
  }
  span {
    color: ${(props) => props.theme.colors.textColor};
    font-size: 32px;
    font-weight: 600;
  }
`;

export { Container };
