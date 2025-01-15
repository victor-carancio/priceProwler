import styled from "styled-components";
import GamesContainer from "../gamesContainer/GamesContainer";
import { Game } from "../../@types/global";
import { useRef, useState } from "react";
import { ViewMore } from "../viewMore/ViewMoreButton";
import { device } from "../../styles/media";

interface FeatureGamesProps {
  feature: string;
  games: Game[];
}
const FeatureGames = ({ feature, games }: FeatureGamesProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef<HTMLParagraphElement>(null);

  //   const handleOpenFeature = () => {
  //     setIsOpen(!isOpen);
  //   };

  const toggleExpand = () => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }

    setIsOpen(!isOpen);
  };

  return games.length ? (
    <FeatureContainer>
      <TitleFeature>{feature}</TitleFeature>
      {games.length >= 12 ? (
        <>
          <FeatureGamesType
            $isOpen={isOpen}
            $maxHeight={maxHeight}
            ref={contentRef}
          >
            <GamesContainer data={games} isSmallSize={true} />
          </FeatureGamesType>
          <ViewMore onClick={toggleExpand}>
            {isOpen ? "Ver Menos" : "Ver Más"}
          </ViewMore>
        </>
      ) : (
        <div>
          <GamesContainer data={games} isSmallSize={true} />
        </div>
      )}
    </FeatureContainer>
  ) : (
    <></>
  );
};

export default FeatureGames;
interface FeatureContainerProps {
  $isOpen?: boolean;
  $maxHeight?: number;
}

const FeatureContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleFeature = styled.h2`
  margin-bottom: 15px;

  @media ${device.tablet} {
    margin-bottom: 20px;
  }
`;

const FeatureGamesType = styled.div<FeatureContainerProps>`
  height: ${({ $isOpen, $maxHeight }) =>
    $isOpen ? `${$maxHeight}px` : "685px"};

  overflow: hidden;
  transition: height 300ms ease;
  @media ${device.tablet} {
    height: ${({ $isOpen, $maxHeight }) =>
      $isOpen ? `${$maxHeight}px` : "625px"};
  }
`;
