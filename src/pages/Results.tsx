import { useSearchParams } from "react-router-dom";
import { useGetGameFromNameDBQuery } from "../store/apis/gameApi";
import styled from "styled-components";
import { Game, StoreTypes } from "../types";
import { device } from "../styles/media";
import { useNavigate } from "react-router-dom";
import StorePrice from "../components/storePrice/StorePrice";
import { capitalizeEachWord } from "../utils";

const Results = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const navigate = useNavigate();

  const handleNavigateToDetail = (id: number) => {
    navigate(`/game/${id}`);
  };

  const { data, error, isLoading } = useGetGameFromNameDBQuery(searchTerm);

  //todo: loading y error de busqueda
  if (isLoading) return <div>Cargando games....</div>;
  if (error) return <div>Ocurrió un error al cargar los datos</div>;

  return (
    <ResultContainer>
      {data &&
        data?.data.map((game) => {
          return (
            <CardGame key={game.id} $imageUrl={getImgGame(game, true)}>
              <div>
                <ImgGame
                  src={getImgGame(game, false)}
                  alt={`${game.gameName}-img`}
                  onClick={() => handleNavigateToDetail(game.id)}
                />
              </div>

              <InfoGame>
                <TitleGame onClick={() => handleNavigateToDetail(game.id)}>
                  {capitalizeEachWord(game.gameName)}
                </TitleGame>
                <StoresContainer>
                  {game.stores.map((store) => {
                    return <StorePrice key={store.id} store={store} />;
                  })}
                </StoresContainer>

                {/* <MoreInfo>
                  <CustomBtn
                    text="Añadir a lista de deseados"
                    icon={<FaBell />}
                  />
                
                </MoreInfo> */}
              </InfoGame>
            </CardGame>
          );
        })}
    </ResultContainer>
  );
};

interface CardGameProps {
  $imageUrl: string;
}

const ResultContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 50px 15px;
  display: flex;
  flex-flow: column nowrap;
  gap: 50px;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    padding: 100px 20px;
    flex-flow: row wrap;
  }

  @media ${device.laptop} {
    padding: 100px 50px;
  }
`;

const CardGame = styled.div<CardGameProps>`
  //todo cambiar cover por artwork en backend

  /* background-image: ${({ theme, $imageUrl }) =>
    `radial-gradient(${theme.cardGameGradient}), url(${$imageUrl}) `};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */

  /* background-color: ${({ theme }) => theme.card}; */
  border-radius: 5px;
  padding: 10px 10px;
  max-width: 400px;
  width: 100%;
  height: 170px;
  height: 200px;
  display: flex;

  justify-content: space-between;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  /* @media ${device.tablet} {
    padding: 23px;
    width: 90%;
    max-width: 550px;
    height: 250px;
    flex-grow: 0;
  } */
  @media ${device.tablet} {
    /* flex-grow: 1;
    max-width: 450px;
    height: 250px; */

    padding: 0px;
    flex-direction: column;
    height: 415px;
    max-width: 230px;
  }
`;

const ImgGame = styled.img`
  width: 100px;
  height: 130px;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 3px;
  cursor: pointer;
  opacity: 1;
  transition: filter 300ms ease;

  &:hover {
    filter: brightness(0.6);
  }

  @media ${device.tablet} {
    width: 230px;
    height: 260px;
    object-fit: cover;
    object-position: 50% top;
  }
`;

const InfoGame = styled.div`
  overflow: hidden;
  padding-left: 7px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-content: ; */
  justify-content: center;
  /* align-items: center; */
  gap: 10px;

  @media ${device.tablet} {
    padding: 0;
    justify-content: flex-start;
  }
`;

const TitleGame = styled.h2`
  cursor: pointer;
  font-size: 14px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media ${device.tablet} {
    padding: 0 5px;
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 14px;
  }

  transition: color 300ms ease, transform 300ms ease, text-decoration 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.textHover};
    text-decoration: underline;
  }
`;

const StoresContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin: auto 0;
`;

const getImgGame = (game: Game, backgrond: boolean) => {
  if (game.infoGame.length > 0 && "cover" in game.infoGame[0]) {
    return backgrond
      ? `https://images.igdb.com/igdb/image/upload/t_screenshot_med/${game.infoGame[0].cover.image_id}.jpg`
      : `https://images.igdb.com/igdb/image/upload/t_720p_2x/${game.infoGame[0].cover.image_id}.jpg`;
  }
  const correctStore = game.stores.find((store) => store.game_id === game.id);

  if (!correctStore) {
    return "img/defult.jpg";
  }

  const { store, imgStore } = correctStore;
  if (backgrond) {
    return imgStore;
  }

  const storeImage: Record<StoreTypes, string> = {
    [StoreTypes.STEAM_STORE]: "",
    [StoreTypes.EPIC_STORE]: "?h=352&amp;quality=medium&amp;resize=1&amp;w=264",
    [StoreTypes.XBOX_STORE]: "?q=100&h=352&w=265",
  };
  //569 x 320
  return `${imgStore}${storeImage[store as StoreTypes]}`;
};

export default Results;
