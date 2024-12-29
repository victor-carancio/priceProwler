import { Game } from "../../@types/global";
import { getImgGame } from "../../pages/Results";
import { device } from "../../styles/media";
import styled from "styled-components";
import StorePrice from "../storePrice/StorePrice";
import { useNavigate } from "react-router-dom";
import { capitalizeEachWord } from "../../utils";

interface CardGameContainerProps {
  game: Game;
  isSmallSize?: boolean;
}

const CardGameContainer = ({ game, isSmallSize }: CardGameContainerProps) => {
  const navigate = useNavigate();

  const handleNavigateToDetail = (id: number) => {
    navigate(`/game/${id}`);
  };
  return (
    <CardGame
      key={game.id}
      $imageUrl={getImgGame(game)}
      onClick={() => handleNavigateToDetail(game.id)}
      $isSmallSize={isSmallSize}
    >
      <ImgContainer>
        <ImgGame
          src={getImgGame(game)}
          alt={`${game.gameName}-img`}
          onClick={() => handleNavigateToDetail(game.id)}
          $isSmallSize={isSmallSize}
        />
      </ImgContainer>

      <InfoGame>
        <TitleGame>{capitalizeEachWord(game.gameName)}</TitleGame>
        <StoresContainer>
          <StorePrice store={game.stores[0]} shouldRedirect={false} />
        </StoresContainer>
      </InfoGame>
    </CardGame>
  );
};

export default CardGameContainer;

interface CardGameProps {
  $imageUrl: string;
  $isSmallSize?: boolean;
}

const CardGame = styled.div<CardGameProps>`
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.2));
  background-color: ${({ theme }) => theme.cardGame};

  width: 100%;

  display: flex;
  padding: 0px;
  flex-direction: column;
  /* height: ${({ $isSmallSize }) => ($isSmallSize ? "210px" : "270px")};
  max-width: ${({ $isSmallSize }) => ($isSmallSize ? "330px" : "400px")}; */
  height: 210px;
  max-width: 330px;

  justify-content: space-between;
  align-items: center;

  box-shadow: ${({ $isSmallSize }) =>
    $isSmallSize
      ? "rgba(0, 0, 0, 0.15) 0px 5px 10px,rgba(0, 0, 0, 0.05) 0px 1px 7px"
      : "rgba(0, 0, 0, 0.15) 0px 15px 25px,rgba(0, 0, 0, 0.05) 0px 1px 7px"};
  /* rgba(0, 0, 0, 0.15) 0px 5px 10px, */
  //rgba(0, 0, 0, 0.15) 0px 15px 25px,
  /* rgba(0, 0, 0, 0.05) 0px 1px 7px; */

  @media ${device.tablet} {
    padding: 0px;

    height: ${({ $isSmallSize }) => ($isSmallSize ? "190px" : "250px")};
    max-width: ${({ $isSmallSize }) => ($isSmallSize ? "280px" : "385px")};
    /* height: 190px;
    max-width: 280px; */
  }
  transition: filter 300ms ease, transform 300ms ease;
  &:hover {
    transform: translate(0, 1px);
    filter: brightness(0.6);
  }
  margin-bottom: ${({ $isSmallSize }) => ($isSmallSize ? "0" : "15px")};
`;

const ImgContainer = styled.div`
  width: 100%;
`;

interface ImgGameProps {
  $isSmallSize?: boolean;
}

const ImgGame = styled.img<ImgGameProps>`
  width: 100%;
  /* height: ${({ $isSmallSize }) => ($isSmallSize ? "140px" : "200px")}; */
  height: 140px;
  object-fit: cover;

  border-radius: 4px;
  cursor: pointer;
  opacity: 1;

  @media ${device.tablet} {
    width: ${({ $isSmallSize }) => ($isSmallSize ? "280px" : "385px")};
    height: ${({ $isSmallSize }) => ($isSmallSize ? "120px" : "180px")};
    /* width: 280px;
    height: 120px; */
    object-fit: cover;
  }
`;

const InfoGame = styled.div`
  overflow: hidden;

  padding: 5px 0 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;

  @media ${device.tablet} {
    padding: 5px 0 0 0;
  }
`;

const TitleGame = styled.h2`
  padding: 0 8px;
  cursor: pointer;
  font-size: 14px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media ${device.tablet} {
    font-size: 15px;
  }
  @media ${device.laptop} {
    font-size: 14px;
  }
`;

const StoresContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
