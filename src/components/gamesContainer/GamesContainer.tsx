import styled from "styled-components";
import { Game } from "../../@types/global";
import CardGameContainer from "../cardGame/CardGameContainer";
import { device } from "../../styles/media";

interface GamesContainerProps {
  data: Game[];
  isSmallSize?: boolean;
}

const GamesContainer = ({ data, isSmallSize }: GamesContainerProps) => {
  return (
    <ResultContainer $isSmallSize={isSmallSize}>
      {data.map((game) => {
        return (
          <CardGameContainer
            game={game}
            key={game.id}
            isSmallSize={isSmallSize}
          ></CardGameContainer>
        );
      })}
      {/* <EmptyDiv></EmptyDiv> */}
    </ResultContainer>
  );
};

export default GamesContainer;

interface ResultContainerProps {
  $isSmallSize?: boolean;
}

const ResultContainer = styled.div<ResultContainerProps>`
  margin: 0 auto;
  width: 100%;
  /* max-width: 1440px; */
  /* padding: 50px 15px; */
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  /* gap: ${({ $isSmallSize }) => ($isSmallSize ? "20px" : "50px")}; */
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    /* padding: 100px 20px; */
    flex-flow: row wrap;
    /* justify-content: center; */
    justify-content: center;
    /* background-color: red; */
    /* justify-content: center; */
  }

  @media ${device.laptop} {
    flex: 1;
    flex-flow: row wrap;
    /* background-color: green; */
    justify-content: center;
    /* padding: 100px 50px; */
  }
  @media ${device.desktop} {
    justify-content: center;
  }

  /* &::after {
    content: "";
    flex: auto;
  } */
`;
// interface EmptyDivprops {
//   $isSmallSize?: boolean;
// }
// const EmptyDiv = styled.div<EmptyDivprops>`
//   flex: auto;
// `;
