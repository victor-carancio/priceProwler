// import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <h2>Esto puede tomar unos momentos...</h2>
      <ImgLoading src="/assets/Bean-Eater-loader.gif" alt="loading-alt" />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  height: calc(90vh + 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgLoading = styled.img`
  width: 200px;
`;
