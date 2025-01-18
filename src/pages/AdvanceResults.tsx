import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { MainContainer } from "./Results";
import styled from "styled-components";
import { useGetGameWithFiltersQuery } from "../store/apis/gameApi";
import Loading from "../components/Loading";
import SearchError from "../components/SearchError";
import ResultNotFound from "../components/ResultNotFound";
import GamesContainer from "../components/gamesContainer/GamesContainer";
import Pagination from "../components/Pagination";
// import { useEffect } from "react";

// import { useState } from "react";

const AdvanceResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState(1);

  // const jio = Object.fromEntries(searchParams);
  // console.log(jio);
  // const jioo = new URLSearchParams(jio).toString();
  // console.log(jioo);

  // const url = [...searchParams]
  //   .map((element) => `${element[0]}=${element[1]}`)
  //   .join("&");

  const { data, isLoading, error, isFetching } = useGetGameWithFiltersQuery(
    Object.fromEntries(searchParams)
  );

  // console.log(data);
  if (isLoading || isFetching) return <Loading />;
  if (error) return <SearchError />;
  if (data?.nbHts === 0 || !data?.games.length) return <ResultNotFound />;

  const prevPage = () => {
    if (data.currentPage > 1) {
      setSearchParams(
        (prev) =>
          new URLSearchParams({
            ...Object.fromEntries(prev),
            page: (data.currentPage - 1).toString(),
          })
      );
      window.scrollTo(0, 0);
      // navigate(`${url}&page=${data.currentPage - 1}`);
    }
  };

  const nextPage = () => {
    if (data.currentPage !== data.totalPages) {
      setSearchParams(
        (prev) =>
          new URLSearchParams({
            ...Object.fromEntries(prev),
            page: (data.currentPage + 1).toString(),
          })
      );
      window.scrollTo(0, 0);
      // navigate(`${url}&page=${data.currentPage + 1}`);
    }
  };

  const clickPage = (page: number) => {
    setSearchParams(
      (prev) =>
        new URLSearchParams({
          ...Object.fromEntries(prev),
          page: page.toString(),
        })
    );
    window.scrollTo(0, 0);
  };

  // setCurrentPage(data.currentPage);
  // const numbers = [...Array(data.totalPages + 1).keys()].slice(1);

  // console.log(data.currentPage);
  // console.log(data.totalPages);
  // console.log(numbers);
  // console.log(data.games);

  return (
    <>
      <Helmet>
        <title> Búsqueda avanzada | Price Prowler</title>
        <meta
          name="description"
          content="Busca videojuegos por nombre, compara precios actualizados para aprovechar los decuentos de tus tiendas favoritas."
        />
      </Helmet>
      <MainContainer>
        {data && (
          <>
            <ResultHeader>
              <h3>
                {`Mostrando ${(data.currentPage - 1) * 20 + 1} - ${Math.min(
                  data.currentPage * 20,
                  data.totalGames
                )} de ${data.totalGames}`}
              </h3>
              {/* <CustomSelect
              options={sortOptions}
              value={selectedValue}
              onChange={handleSelectedChange}
              // placeholder="ordenar por"
            /> */}
            </ResultHeader>
            <GamesContainer
              data={data.games}
              // isSmallSize={true}
            />
            <Pagination
              currentPage={data.currentPage}
              totalPages={data.totalPages}
              prevPage={prevPage}
              nextPage={nextPage}
              clickPage={clickPage}
            />
          </>
        )}
      </MainContainer>
    </>
  );
};

export default AdvanceResults;

const ResultHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
