import styled from "styled-components";

const Container = styled.div`
  width: 370px;
  height: 432px;
  margin-bottom: 67px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);

  .block {
    /* background-color: ${(props) => props.theme.colors.backgroundColor}; */
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
    cursor: pointer;
  }
  svg.like:hover {
    color: ${(props) => props.theme.colors.error};
  }
  .block div svg:first-child {
    margin-right: 16px;
  }
  img {
    padding: 10px;
    width: 100%;
    object-fit: contain;
    aspect-ratio: 16/9;
  }
  p {
    font-size: 24px;
    margin: 16px auto;
  }
  span {
    color: ${(props) => props.theme.colors.textColor};
    font-size: 32px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 67px;
  }
`;

export { Container };
