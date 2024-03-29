import styled from "styled-components";
import theme from "../../styles/theme";

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.primaryColor};
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  p {
    color: ${theme.colors.whiteColor};
    font-weight: 500;
    margin-bottom: 25px;
    font-size: 1.325rem;
    max-width: 50%;
    text-align: center;
  }
`;
