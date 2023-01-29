import React from "react";
import { SyncLoader } from "react-spinners";
import { LoadingContainer } from "./styles";

const Loading = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <SyncLoader size={30} color="#FFF" />
    </LoadingContainer>
  );
};

export default Loading;
