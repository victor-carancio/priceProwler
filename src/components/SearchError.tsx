import styled from "styled-components";
import { StyledIcon } from "./logo";
import { FaFaceGrinBeamSweat } from "react-icons/fa6";

const SearchError = () => {
  return (
    <SearchErrorContainer>
      <h2>Ocurrio un error inesperado, vuelva a intentarlo más tarde.</h2>
      <StyledIcon size="100px">
        <FaFaceGrinBeamSweat />
      </StyledIcon>
    </SearchErrorContainer>
  );
};

export default SearchError;

const SearchErrorContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
