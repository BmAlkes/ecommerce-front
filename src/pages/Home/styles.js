import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;

  .dividerSection {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    border-bottom: 3px solid ${(props) => props.theme.colors.line};

    h2 {
      color: ${(props) => props.theme.colors.textColor};
      font-size: 40px;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 145px;
      color: ${(props) => props.theme.colors.textColor2};
      font-size: 18px;
    }
    svg {
      width: 40px;
    }
  }
`;
