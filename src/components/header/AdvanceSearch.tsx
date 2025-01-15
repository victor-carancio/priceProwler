import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../styles/media";
import { StyledIcon } from "../logo";
import CustomSelect from "../select/CustomSelect";
import CustomBtn from "../CustomBtn";
import { sortOptions } from "../../utils";
import { IoClose } from "react-icons/io5";
// import { useGetFilters } from "../../hooks/useGetFilters";
import {
  useGetCategoriesQuery,
  useGetGenresQuery,
} from "../../store/apis/gameApi";
import { useNavigate } from "react-router-dom";

interface AdvanceSearchProps {
  openSearch: boolean;
  isAdvanceSearch: boolean;
  advanceSearchToggle: () => void;
}

const AdvanceSearch = ({
  advanceSearchToggle,
  isAdvanceSearch,
  openSearch,
}: AdvanceSearchProps) => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    genre: "",
    category: "",
    sort: "",
  });

  //   const { categories, genres } = useGetFilters();

  const {
    data: categoryData,
    // error: categoryError,
    isLoading: categoryLoading,
  } = useGetCategoriesQuery("");
  const {
    data: genreData,
    // error: genreError,
    isLoading: genreLoading,
  } = useGetGenresQuery("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    event?.preventDefault();

    if (filters.category || filters.genre) {
      const params = new URLSearchParams();

      if (filters.genre) {
        params.append("genre", filters.genre);
      }
      if (filters.category) {
        params.append("category", filters.category);
      }
      if (filters.sort) {
        const sortCorrect = filters.sort.split("-");
        params.append("sort", sortCorrect[0]);
        params.append("order", sortCorrect[1]);
      }

      const url = `/filters-results?${params.toString()}`;

      navigate(url);
      setFilters({ category: "", genre: "", sort: "" });
    }
  };
  if (categoryLoading || genreLoading) {
    return (
      <AdvanceSearchOverlay
        $isOpen={openSearch}
        $isAdvanceSearch={isAdvanceSearch}
      >
        Cargando...
      </AdvanceSearchOverlay>
    );
  }
  return (
    <AdvanceSearchOverlay
      $isOpen={openSearch}
      $isAdvanceSearch={isAdvanceSearch}
      onClick={advanceSearchToggle}
    >
      <AdvanceSearchContainer
        onSubmit={handleSubmit}
        onClick={(e: React.MouseEvent<HTMLFormElement>) => e.stopPropagation()}
      >
        <CloseOverlay onClick={advanceSearchToggle}>
          <StyledIcon>
            <IoClose />
          </StyledIcon>
        </CloseOverlay>
        <CustomSelect
          name="genre"
          options={
            genreData?.genres.length && !genreLoading
              ? [
                  { label: "Géneros", value: "" },
                  ...getSelectFilter(genreData.genres),
                ]
              : [{ label: "Cargando...", value: "" }]
          }
          onChange={handleSelectChange}
          value={filters.genre}
        />

        <CustomSelect
          name="category"
          options={
            categoryData?.categories.length && !categoryLoading
              ? [
                  { label: "Categorías", value: "" },
                  ...getSelectFilter(categoryData.categories),
                ]
              : [{ label: "Cargando...", value: "" }]
          }
          onChange={handleSelectChange}
          value={filters.category}
        />

        <CustomSelect
          name="sort"
          options={[{ label: "Ordenar por", value: "" }, ...sortOptions]}
          value={filters.sort}
          onChange={handleSelectChange}
          // placeholder="ordenar por"
        />

        <CustomBtn text="Buscar" size="18px" onClick={handleSubmit} />
      </AdvanceSearchContainer>
    </AdvanceSearchOverlay>
  );
};

export default AdvanceSearch;

interface AdvanceSearchOverlayProps {
  $isOpen?: boolean;
  $isAdvanceSearch: boolean;
}

const AdvanceSearchOverlay = styled.div<AdvanceSearchOverlayProps>`
  margin-top: 110px;

  background-color: ${({ theme }) => theme.headerOverlayBackground};
  /* height: ${(props) => (props.$isOpen ? "250px" : "0px")}; */
  /* height: 100%; */
  height: ${({ $isAdvanceSearch, $isOpen }) =>
    $isAdvanceSearch && $isOpen ? "100vh" : "0px"};
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  overflow: hidden;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; */
  transition: height 300ms ease-in-out, padding 300ms ease-in-out;
  @media ${device.laptop} {
    margin-top: 60px;
    height: ${({ $isAdvanceSearch }) => ($isAdvanceSearch ? "100vh" : "0px")};
  }
`;

const AdvanceSearchContainer = styled.form`
  background-color: ${({ theme }) => theme.headerOverlay};
  display: flex;
  position: relative;
  z-index: 99;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px 0;
  width: 100%;
  height: 230px;
  @media ${device.tablet} {
    /* width: 700px; */
  }
`;

const CloseOverlay = styled.div`
  position: absolute;

  top: 0;
  right: 0;
`;

const getSelectFilter = (filters: string[]) => {
  return filters.map((filter) => ({ label: filter, value: filter }));
};
