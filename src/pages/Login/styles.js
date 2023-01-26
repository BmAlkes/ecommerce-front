import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LeftArea = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(108, 108, 255, 0.08);

  img {
    margin: 0 auto;
    max-width: 720px;
  }
`;
export const RightArea = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  p {
    margin-top: 10px;
  }
`;

export const LoginHeadline = styled.p`
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.blackColorr};
  position: relative;

  &::after {
    content: "";
    width: 5px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -15px;
    background: #f4f4ff;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
`;

export const LoginSubtitle = styled.p`
  color: ${(props) => props.theme.colors.blackColor};
  padding-bottom: 20px;
  font-weight: 500;
  width: 100%;
  margin-top: 20px !important;
  text-align: center;
  margin-bottom: 20px;
  a {
    color: ${(props) => props.theme.colors.primaryColor};
  }
`;

export const LoginInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  max-width: 300px;
  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }
`;
