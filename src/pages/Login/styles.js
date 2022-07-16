import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
  display: flex;

  .leftArea {
    max-width: 720px;
    background-color: rgba(108, 108, 255, 0.08);
    p {
      color: ${(props) => props.theme.colors.primaryColor};
      font-weight: bold;
      font-size: 32px;
      margin: 38px 575px 183px 54px;
    }
    img {
      margin: 259px 54px 258px 54px;
    }
  }
  .rightArea {
    max-width: 720px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    flex: 1;
    form {
      display: flex;
      flex-direction: column;
      max-width: 380px;
      margin: 0 auto;
    }

    h2 {
      font-size: 26px;
      font-weight: 500;
      margin-bottom: 26px;
      border-left: 7px solid #f4f4ff;
      padding-left: 11px;
    }

    .input-field {
      display: flex;
      margin-bottom: 10px;
    }
    .input-field svg {
      width: 1.8rem;
      padding: 2px;
      z-index: 10;
    }
    input {
      max-width: 380px;
      height: 50px;
      width: 100%;
      border: none;
      background-color: ${(props) => props.theme.colors.line};
      margin-left: -30px;
      padding-left: 40px;
    }

    button {
      background-color: ${(props) => props.theme.colors.primaryColor};
      color: ${(props) => props.theme.colors.whiteColor};
      width: 379px;
      height: 55px;
      font-size: 16px;
      line-height: 1.36;
      border: none;
      margin: 0 auto;
      margin-bottom: 43px;
    }
    p {
      text-align: center;
    }
    span {
      color: ${(props) => props.theme.colors.primaryColor};
      font-weight: 700;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;

    .leftArea img {
      margin: 0px;
    }
    .rightArea {
      margin: 30px;
    }
  }
`;

export { Container };
