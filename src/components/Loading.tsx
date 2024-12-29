// import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <h2>Esto puede tomar unos momentos...</h2>
      <ImgLoading
        src="/src/assets/Bean Eater@1x-1.0s-200px-200px (1).gif"
        alt="loading-alt"
      />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgLoading = styled.img`
  width: 200px;
`;
