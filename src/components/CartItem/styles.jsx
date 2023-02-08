import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  p {
    color: ${(props) => props.theme.colors.textColor2};
  }
`;

export const CartItemImage = styled.img`
  height: 250px;
  width: 170px;
  object-fit: cover;
  display: block;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  flex: 1;
  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }
  p:nth-child(2) {
    font-weight: 500;
  }
`;

export const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  p {
    margin-left: 10px;
    margin-right: 10px;
  }
  svg:hover {
    cursor: pointer;
  }
`;

export const RemoveButton = styled.div`
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`;
