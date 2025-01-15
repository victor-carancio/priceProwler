// import React from "react";
import { FaFaceFrown } from "react-icons/fa6";
import { StyledIcon } from "./logo";
import styled from "styled-components";

const ResultNotFound = () => {
  return (
    <NotFoundContainer>
      <h2>No se han encontrado resultados, intenta otra búsqueda</h2>
      <StyledIcon size="100px">
        <FaFaceFrown />
      </StyledIcon>
    </NotFoundContainer>
  );
};

export default ResultNotFound;

const NotFoundContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
