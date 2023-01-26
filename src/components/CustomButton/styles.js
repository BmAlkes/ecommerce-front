import styled, { css } from "styled-components";

export const CustomButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;
  width: 100%;
  padding: 12px 20px;
  font-weight: 200;
  max-width: 300px;

  &:hover {
    cursor: pointer;
  }

  svg {
    width: 28px;
  }
  ${(props) =>
    props.primary &&
    css`
      border: 1px solid ${(props) => props.theme.colors.whiteColor};
      background: transparent;
      color: ${(props) => props.theme.colors.whiteColor};
    `};
  background-color: ${(props) => props.theme.colors.primaryColor};
  text-transform: uppercase;
`;
export const IconContainer = styled.div`
  margin-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`;
