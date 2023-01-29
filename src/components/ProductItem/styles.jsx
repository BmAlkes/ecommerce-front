import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  p {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const ProductImage = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 380px;
  width: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
