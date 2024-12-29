import styled from "styled-components";
import { StoreReduced, StoreTypes } from "../../@types/global.d";
import { device } from "../../styles/media";
import { StyledStoreIcon } from "../logo";

import { storeColors } from "../../styles/theme";
import GamepassIcon from "./GamepassIcon";
import GamePrice from "./GamePrice";

interface StorePriceProps {
  store: StoreReduced;
  shouldRedirect: boolean;
  detail?: boolean;
}

const StorePrice = ({ store, shouldRedirect, detail }: StorePriceProps) => {
  const StoreComponent = shouldRedirect ? "a" : "div";
  // console.log("--------------Price-----------------------");
  // console.log(store);
  // console.log("--------------------------------------");
  return (
    <StoreGame
      href={shouldRedirect ? store.url : undefined}
      target={shouldRedirect ? "_blank" : undefined}
      as={StoreComponent}
      $storeName={store.store}
      $shouldHover={shouldRedirect}
      $detail={detail}
    >
      <StoreInfo>
        <StyledStoreIcon
          store={store.store}
          size={detail ? "40px" : undefined}
        />
        {store.store === "Xbox" && store.gamepass && (
          <GamepassIcon height={detail ? "40px" : "25px"} fill="#f2ecff" />
        )}
      </StoreInfo>

      <GamePrice store={store} detail={detail}></GamePrice>
    </StoreGame>
  );
};

interface StoreNameProps {
  $storeName: string;
  $shouldHover?: boolean;
  $detail?: boolean;
}

export const StoreGame = styled.a<StoreNameProps>`
  cursor: pointer;

  background-color: ${({ $storeName }) =>
    storeColors[$storeName as StoreTypes].cardBackground};
  width: 100%;
  height: ${({ $detail }) => ($detail ? "50px" : "35px")};
  padding-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: ${({ $storeName }) =>
    storeColors[$storeName as StoreTypes].cardFontColor};
  @media ${device.tablet} {
    height: ${({ $detail }) => ($detail ? "50px" : "35px")};
  }
  transition: background-color 300ms ease, transform 300ms ease;
  filter: ${({ $detail }) =>
    $detail ? "drop-shadow(0 0 8px rgba(0, 0, 0, 0.6))" : ""};

  ${({ $shouldHover, $storeName }) =>
    $shouldHover &&
    `
   &:hover {
    background-color: 
    ${storeColors[$storeName as StoreTypes].hoverCardBackground};
    transform: translate(0, -2px);
  }
  `}
`;

const StoreInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export default StorePrice;
