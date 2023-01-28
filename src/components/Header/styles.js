import styled from "styled-components";

export const Container = styled.header`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  padding-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    background: #bdb5ff;
  }
`;

export const HeaderItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
export const HeaderTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primaryColor};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const HeaderItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }

  svg {
    color: #000;
    width: 26px;
  }
  span {
    position: absolute;
    top: -10px;
    right: 0;
    background-color: ${(props) => props.theme.colors.primaryColor};
    padding: 2px;
    color: ${(props) => props.theme.colors.whiteColor};
    border-radius: 4px;
    font-size: 0.875rem;
  }
`;
