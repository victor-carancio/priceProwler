import { useParams } from "react-router-dom";
import { useGetGameDetailQuery } from "../store/apis/gameApi";
import styled from "styled-components";
import { getImgGame } from "./Results";
import { FaLink } from "react-icons/fa";

import {
  GameDetails,
  // ImgSizes,
  Screenshot,
  SteamImageSizes,
  // Video,
  // InvolvedCompany,
  // NameIdClass,
  // StoreTypes,
} from "../@types/global.d";
import { device, deviceMax } from "../styles/media";
import StorePrice from "../components/storePrice/StorePrice";
import GameImagesGallery from "../components/imageGallery/GameImagesGallery";
import { Months } from "../utils";
import { useRef, useState } from "react";
import { StyledIcon } from "../components/logo";

const GameDetail = () => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const { id } = useParams();

  const toggleExpand = () => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }

    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const { data, error, isLoading } = useGetGameDetailQuery(id!);

  //todo: loading y error de busqueda
  if (isLoading) return <div>Cargando games....</div>;
  if (error || !data) return <div>Ocurrió un error al cargar los datos</div>;

  const game = { ...getStoreInfo(data) };
  // const jio = "Blood and Gore\r\nIntense Violence\r\nStrong Language";
  //data.stores[0].info_game.screenshots[0].url
  // getImgGame(data, SteamImageSizes.CAPSULE)
  console.log(data);
  return (
    <ContainerGame $imageUrl={data.stores[0].info_game.screenshots[0].url}>
      <h2>{game.gameName}</h2>

      <HeaderGame $imageUrl={getImgGame(data, SteamImageSizes.CAPSULE)}>
        <MainInfo>
          <CoverGame
            src={getImgGame(data, SteamImageSizes.CAPSULE)}
            alt={`${data.gameName}-img`}
          />
          <GalleryTablet>
            <GameImagesGallery images={getImagesFromGame(game.screenshots)} />
          </GalleryTablet>
        </MainInfo>
        <PricesDetail>
          <h3>Tiendas disponibles:</h3>
          {data.stores.map((store) => {
            return (
              <StoreContainer key={store.id}>
                <StorePrice store={store} shouldRedirect={true} detail={true} />
              </StoreContainer>
            );
          })}
        </PricesDetail>
      </HeaderGame>
      <GalleryMobile className="">
        <GameImagesGallery images={getImagesFromGame(game.screenshots)} />
      </GalleryMobile>
      <></>

      <AboutGame>
        <Overview>
          <div>
            <h3>ACERCA DE ESTE JUEGO</h3>
            <hr />
          </div>

          <p>{game.about}</p>
          {game.description && (
            <>
              <GameDescription
                $isExpanded={isDescriptionExpanded}
                $maxHeight={maxHeight}
                ref={contentRef}
              >
                <h4>Descripción</h4>
                <hr />
                <br />
                <p>
                  {game.description.split("\n").map((line, index) => {
                    return (
                      <>
                        {line}
                        {index !== game.description.split("\n").length - 1 && (
                          <>
                            <br />
                          </>
                        )}
                      </>
                    );
                  })}
                </p>
              </GameDescription>
              <ViewMore onClick={toggleExpand}>
                {isDescriptionExpanded ? "Ver menos" : "Ver más"}
              </ViewMore>
            </>
          )}

          {game.pc_requirements?.minimum &&
            game.pc_requirements.recommended && (
              <div>
                <h4>Requisitos del sistema</h4>
                <hr />
                <br />
                <p>
                  {" "}
                  {game.pc_requirements.minimum
                    .split("\n")
                    .map((line, index) => {
                      return (
                        <>
                          {index === 0 ? (
                            <strong>{line.toUpperCase()}</strong>
                          ) : (
                            <>{` • ${line}`}</>
                          )}
                          {index !==
                            game.pc_requirements!.minimum.split("\n").length -
                              1 && (
                            <>
                              <br />
                              <br />
                            </>
                          )}
                        </>
                      );
                    })}
                </p>

                <br />
                <p>
                  {" "}
                  {game.pc_requirements.recommended
                    .split("\n")
                    .map((line, index) => {
                      return (
                        <>
                          {index === 0 ? (
                            <strong>{line.toUpperCase()}</strong>
                          ) : (
                            <>{` • ${line}`}</>
                          )}
                          {index !==
                            game.pc_requirements!.recommended.split("\n")
                              .length -
                              1 && (
                            <>
                              <br />
                              <br />
                            </>
                          )}
                        </>
                      );
                    })}
                </p>
              </div>
            )}
        </Overview>
        <InfoOfGame>
          <div>
            <h4>Información del juego</h4>
            <hr />
          </div>

          {game.ratings && (
            <InfoContainer>
              <p>{game.ratings.name}</p>
              <span>
                {" "}
                <strong>{`${game.ratings.rating.toUpperCase()}
              `}</strong>{" "}
                - {game.ratings.descriptors}
              </span>
            </InfoContainer>
          )}

          {game.developer && (
            <InfoContainer>
              <p>Desarrollador</p>
              <span>{game.developer}</span>
            </InfoContainer>
          )}

          {game.publisher && (
            <InfoContainer>
              <div>
                <p>Editor</p>
              </div>
              <span>{game.publisher}</span>
            </InfoContainer>
          )}

          {game.genres && (
            <InfoContainer>
              <p>Género</p>
              <span>{getInfoOfGameNames(game.genres)}</span>
            </InfoContainer>
          )}

          {game.release_date && (
            <InfoContainer>
              <p>Lanzamiento</p>
              <span>{getCorrectDate(game.store, game.release_date)}</span>
            </InfoContainer>
          )}

          {game.supportedLanguages !== "-" && (
            <InfoContainer>
              <p>Lenguajes</p>
              <span>{game.supportedLanguages}</span>
            </InfoContainer>
          )}

          {game.categories && (
            <InfoContainer>
              <div>
                <p>Categorías</p>
              </div>
              <span>{getInfoOfGameNames(game.categories)}</span>
            </InfoContainer>
          )}

          {game.website !== "-" && (
            <WebSiteContainer>
              <a href={game.website} target="_blank">
                Sitio web
              </a>
              <StyledIcon>
                <FaLink size="14px" />
              </StyledIcon>
            </WebSiteContainer>
          )}
        </InfoOfGame>
      </AboutGame>
    </ContainerGame>
  );
};

interface ContainerGameProps {
  $imageUrl: string;
}

const ContainerGame = styled.div<ContainerGameProps>`
  margin: 0 auto;
  max-width: 1440px;
  padding: 40px 10px;
  width: 100%;

  @media ${device.tablet} {
    padding: 60px 15px;
  }

  @media ${device.laptop} {
    padding: 60px 90px;
  }

  @media ${device.desktop} {
    padding: 60px 125px;
  }
`;

const HeaderGame = styled.div<ContainerGameProps>`
  margin: 20px 0;
  padding: 20px 15px;
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  background-color: ${({ theme }) => theme.cardGameOpaque};

  border-radius: 5px;
  @media ${device.tablet} {
    padding: 20px 10px;
    flex-flow: row;

    justify-content: center;
    align-items: center;
    height: 500px;
    gap: 15px;

    &::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: -1;
      display: block;
      margin: 0 auto;
      background-image: ${({ theme, $imageUrl }) =>
        `radial-gradient(${theme.bodyBackgroundGradient}), url(${$imageUrl}) `};
      background-repeat: no-repeat;
      background-position: top center;
      background-size: cover;
      /* width: 80%; */
      height: 100%;
      /* max-width: 1440px; */
      -webkit-filter: blur(7px);
      -moz-filter: blur(7px);
      -o-filter: blur(7px);
      -ms-filter: blur(7px);
      filter: blur(7px);
    }
  }
`;

const MainInfo = styled.div`
  width: 100%;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
  }

  @media ${device.laptop} {
    width: 60%;
  }
`;

const CoverGame = styled.img`
  width: 100%;
  height: 450px;
  object-fit: contain;
  border-radius: 5px;
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.8));

  @media ${device.tablet} {
    display: none;
  }
`;

const PricesDetail = styled.div`
  height: auto;
  width: 100%;
  max-width: 340px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${device.tablet} {
    width: 40%;
    margin: 0;
    max-width: 450px;
  }

  @media ${device.laptop} {
    width: 30%;
    margin: 0;
    max-width: 450px;
  }
`;

const StoreContainer = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 7px 0;
`;

const GalleryMobile = styled.div`
  margin: 0px auto;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.4));
  width: 80%;
  @media ${device.tablet} {
    display: none;
  }
`;

const GalleryTablet = styled.div`
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.4));
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  @media ${deviceMax.tablet} {
    display: none;
  }
`;

const AboutGame = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 20px 10px;
  gap: 20px;
  @media ${device.laptop} {
    padding: 20px 0;
    width: 100%;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
  }
  h4 {
    font-size: 18px;
  }
  p,
  span {
    font-size: 15px;
    color: ${({ theme }) => theme.textBody};
  }
`;

const Overview = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 10px;
  /* background-color: ${({ theme }) => theme.background}; */
  background-color: ${({ theme }) => theme.cardGameOpaque};
  order: 2;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media ${device.laptop} {
    order: 1;
    width: 65%;
  }
`;
interface GameDescriptionProps {
  $isExpanded: boolean;
  $maxHeight: number;
}
const GameDescription = styled.div<GameDescriptionProps>`
  height: ${({ $isExpanded, $maxHeight }) =>
    $isExpanded ? `${$maxHeight}px` : "200px"};
  overflow: hidden;
  transition: height 300ms ease;
`;

const ViewMore = styled.div`
  box-sizing: content-box;
  cursor: pointer;
  align-self: flex-end;
  text-align: center;
  background-color: ${({ theme }) => theme.card};
  padding: 3px 8px;
  width: 100px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.textBody};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 0.5px solid transparent;
  transition: border-color 300ms ease-in-out, background-color 300ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.textBody};
    background-color: ${({ theme }) => theme.background};
  }
`;

const InfoOfGame = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 10px;
  order: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  /* background-color: ${({ theme }) => theme.background}; */
  background-color: ${({ theme }) => theme.cardGameOpaque};
  @media ${device.laptop} {
    order: 2;
    width: 33%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;

  & div:first-child {
    width: 102px;
  }
  p {
    font-weight: bold;
    width: 102px;
  }
  span {
    width: 68%;
    overflow: hidden;
  }
`;

const WebSiteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 6px 8px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.textBody};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 1px solid transparent;
  transition: border-color 300ms ease-in-out, background-color 300ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.textBody};
    background-color: ${({ theme }) => theme.background};
  }
`;

const getImagesFromGame = (screenshots: Screenshot[]) => {
  return screenshots.map((image) => {
    return {
      original: image.url,
      thumbnail: image.thumbUrl === "-" ? image.url : image.thumbUrl,
      fullscreen: image.url,
    };
  });
};

const getStoreInfo = (game: GameDetails) => {
  const { gameName, id: gameId, stores } = game;

  const steam = stores.find((store) => store.store === "Steam");
  const xbox = stores.find((store) => store.store === "Xbox");
  const epic = stores.find((store) => store.store === "Epic");

  const existStore = steam ?? xbox ?? epic!;

  const {
    gamepass,
    id: storeId,
    info_game,
    info_price,
    store,
    url,
  } = existStore;

  const {
    about,
    categories,
    description,
    developer,
    genres,
    id: infoGameId,
    imgStore,
    publisher,
    release_date,
    screenshots,
    videos,
    website,
    pc_requirements,
    supportedLanguages,
    ratings,
  } = info_game;

  return {
    gameName,
    gameId,

    gamepass,
    storeId,
    info_price,
    store,
    url,
    about,
    categories,
    description,
    developer,
    genres,
    infoGameId,
    imgStore,
    publisher,
    release_date,
    screenshots,
    videos,
    website,
    pc_requirements,
    supportedLanguages,
    ratings: ratings ? ratings[0] : null,
  };
};

const getInfoOfGameNames = (info: string[]) => {
  return info
    .map((name) => name)
    .slice(0, 10)
    .join(" - ");
};

const transformDate = (dateString: string) => {
  // Diccionario para convertir meses en español a números
  const months = {
    ENE: "01",
    FEB: "02",
    MAR: "03",
    ABR: "04",
    MAY: "05",
    JUN: "06",
    JUL: "07",
    AGO: "08",
    SEP: "09",
    OCT: "10",
    NOV: "11",
    DIC: "12",
  };

  // Separar los componentes de la fecha
  const [day, month, year] = dateString.split(" ");

  // Formatear la fecha como YYYY-MM-DDT00:00:00.000Z
  const formattedDate = `${year}-${
    months[month as keyof typeof months]
  }-${day.padStart(2, "0")}`;

  return formattedDate;
};

const getCorrectDate = (store: string, release_date: string) => {
  const correctReleaseDate =
    store !== "Steam" ? release_date : transformDate(release_date);

  const date = new Date(correctReleaseDate);

  return `${date.getDay()} de ${
    Months[date.getMonth()]
  } de ${date.getFullYear()}`;
};

export default GameDetail;
