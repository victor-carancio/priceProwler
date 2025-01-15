import { useSearchParams } from "react-router-dom";

import styled from "styled-components";
import { Game, StoreTypes } from "../@types/global.d";
import { device } from "../styles/media";

import CustomSelect from "../components/select/CustomSelect";
import { useState } from "react";
import { useGetGame } from "../hooks/useGetGame";
// import CardGameContainer from "../components/cardGame/CardGameContainer";
import GamesContainer from "../components/gamesContainer/GamesContainer";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";
import ResultNotFound from "../components/ResultNotFound";
import SearchError from "../components/SearchError";
import { sortOptions } from "../utils";

// import { Game, StoreTypes } from "../@types/global.d.ts";

const Results = () => {
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get("search") || "";
  const [selectedValue, setSelectValue] = useState("price-asc");

  const handleSelectedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  const { data, error, isLoading } = useGetGame(searchTerm);

  if (isLoading) return <Loading />;
  if (error) return <SearchError />;
  if (data?.nbHts === 0 || !data?.data.length) return <ResultNotFound />;

  return (
    <>
      <Helmet>
        <title>{searchTerm} | Búsqueda | Price Prowler</title>
        <meta
          name="description"
          content="Busca videojuegos por nombre, compara precios actualizados para aprovechar los decuentos de tus tiendas favoritas."
        />
      </Helmet>
      <MainContainer>
        {data && (
          <>
            <ResultHeader>
              <h3>Resultados: {data.nbHts}</h3>
              <CustomSelect
                options={sortOptions}
                value={selectedValue}
                onChange={handleSelectedChange}
                autosize={true}
                // placeholder="ordenar por"
              />
            </ResultHeader>
            <GamesContainer
              data={sortGames(data.data, selectedValue)}
              // isSmallSize={true}
            />
          </>
        )}
      </MainContainer>
    </>
  );
};

export const MainContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 50px 15px;
  display: flex;
  flex-direction: column;
  min-height: calc(90vh - 150px);

  align-items: center;
  gap: 40px;
  @media ${device.tablet} {
    align-items: flex-start;

    /* max-width: 80%; */
    padding: 50px 20px;
  }

  @media ${device.laptop} {
    align-items: flex-start;

    max-width: 80%;
    padding: 75px 0px;
  }

  @media ${device.desktop} {
    max-width: 1200px;
  }
`;

const ResultHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const getImgGame = (game: Game) => {
  const correctStore = game.stores.find((store) => store.game_id === game.id);

  if (!correctStore) {
    return "img/defult.jpg";
  }

  const { store, info_game } = correctStore;

  const storeImage: Record<StoreTypes, string> = {
    [StoreTypes.STEAM_STORE]: "",
    [StoreTypes.EPIC_STORE]: "?h=352&amp;quality=medium&amp;resize=1&amp;w=264", //"?h=352&amp;quality=medium&amp;resize=1&amp;w=264", "?resize=1&w=460&h=215&quality=medium"
    [StoreTypes.XBOX_STORE]: "?q=100&h=352&w=265",
  };

  return `${info_game.imgStore}${storeImage[store as StoreTypes]}`;
};

const sortGames = (data: Game[], sortKey: string) => {
  const sortOption = sortKey.split("-");
  // console.log(sortOption);
  const sort = sortOption[0];
  const order = sortOption[1] === "asc" ? 1 : -1;

  let gamesSorted: Game[] = [];
  if (sort === "alphabetical") {
    gamesSorted = [...data].sort((a, b) => {
      const gameA = a.gameName;
      const gameB = b.gameName;

      if (gameA > gameB) {
        return 1 * order;
      }
      if (gameA < gameB) {
        return -1 * order;
      }
      return 0;
    });
  }

  if (sort === "price") {
    gamesSorted = [...data].sort((a, b) => {
      const finalPriceA = parseInt(a.stores[0].info_price.final_price);
      const finalPriceB = parseInt(b.stores[0].info_price.final_price);

      if (isNaN(finalPriceA)) return -1;
      if (isNaN(finalPriceB)) return 1;

      if (finalPriceA > finalPriceB) {
        return 1 * order;
      }
      if (finalPriceA < finalPriceB) {
        return -1 * order;
      }
      return 0;
    });
  }

  return gamesSorted;
};

export default Results;
