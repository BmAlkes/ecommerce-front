import styled from "styled-components";

export const CustomInputContainer = styled.input`
  border: none;
  width: 100%;
  background-color: #ebebf1;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  color: ${(props) => props.theme.colors.textColor2};
  border: ${(props) => (props.hasError ? `2px solid #ff6a6a ` : "none")};
  &::placeholder {
    color: ${(props) =>
      props.hasError
        ? props.theme.colors.error
        : props.theme.input.placeholder};
  }
  &:focus {
    outline: ${(props) =>
      props.hasError ? "none" : `2px solid ${props.theme.input.placeholder}`};
  }
`;
