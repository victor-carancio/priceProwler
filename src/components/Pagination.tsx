import { GrFormPrevious, GrFormNext } from "react-icons/gr";
// import { BiSkipNext } from "react-icons/bi";
// import { BiSkipPrevious } from "react-icons/bi";

import { StyledIcon } from "../components/logo";
import styled from "styled-components";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  prevPage: () => void;
  nextPage: () => void;
  clickPage: (page: number) => void;
}
const Pagination = ({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  clickPage,
}: PaginationProps) => {
  // console.log(totalPages);

  const prevThreeNum = Array.from(
    { length: 3 },
    (_, index) => currentPage - 1 - index
  )
    .filter((value) => value > 0)
    .reverse();

  const nextThreeNum = Array.from(
    { length: 3 },
    (_, index) => currentPage + index
  ).filter((value) => value <= totalPages);
  const pagination = [...prevThreeNum, ...nextThreeNum];

  return (
    <PaginationContainer>
      {currentPage > 1 && (
        <StyledIcon>
          <GrFormPrevious onClick={prevPage} />
        </StyledIcon>
      )}

      {pagination.map((page) => {
        return page === currentPage ? (
          <CurrentPage key={page}>{page}</CurrentPage>
        ) : (
          <PaginationNumber key={page} onClick={() => clickPage(page)}>
            {page}
          </PaginationNumber>
        );
      })}

      {totalPages !== currentPage && (
        <StyledIcon>
          <GrFormNext onClick={nextPage} />
        </StyledIcon>
      )}
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

const PaginationNumber = styled.div`
  cursor: pointer;
  height: 25px;
  font-size: 18px;
  padding: 2px;
  transition: color 300ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.textHover};
  }
`;

const CurrentPage = styled.div`
  font-weight: 700;
  font-size: 20px;
  height: 25px;
  padding: 2px;

  border-bottom: 1px solid ${({ theme }) => theme.text};
`;
