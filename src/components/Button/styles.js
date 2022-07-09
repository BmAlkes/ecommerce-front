import styled, { css } from "styled-components";

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;
  width: 194px;
  padding: 12px 20px;

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
  text-transform: uppercase;
`;

export { Container };
