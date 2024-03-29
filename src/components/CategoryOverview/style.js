import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CategoryTitle = styled.p`
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 5px;
  padding-bottom: 10px;
  color: ${(props) => props.theme.colors.primaryColor};
  font-size: 30px;
  cursor: pointer;
`;

export const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
