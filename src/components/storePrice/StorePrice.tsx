import styled from "styled-components";
import { Store, StoreTypes } from "../../@types/global.d";
import { device } from "../../styles/media";
import { StyledStoreIcon } from "../logo";

import { storeColors } from "../../styles/theme";
import GamepassIcon from "./GamepassIcon";

interface StorePriceProps {
  store: Store;
  shouldRedirect: boolean;
  detail?: boolean;
}

const StorePrice = ({ store, shouldRedirect, detail }: StorePriceProps) => {
  const StoreComponent = shouldRedirect ? "a" : "div";

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
      {store.info[0].discount_percent !== "0" &&
      store.info[0].discount_percent !== "-" ? (
        <DiscountPrice>
          <Discount $storeName={store.store} $detail={true}>
            <p>{`${store.info[0].discount_percent}%`}</p>
          </Discount>
          <Prices>
            <InitialPrice
              $storeName={store.store}
              $detail={detail}
            >{`${store.info[0].initial_price} ${store.info[0].currency}`}</InitialPrice>
            <NormalPrice $storeName={store.store} $detail={detail}>
              {`${store.info[0].final_price} ${store.info[0].currency}`}
            </NormalPrice>
          </Prices>
        </DiscountPrice>
      ) : (
        <Prices>
          <NormalPrice $storeName={store.store} $detail={detail}>
            {`${store.info[0].initial_price} ${store.info[0].currency}`}
          </NormalPrice>
        </Prices>
      )}
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
  height: ${({ $detail }) => ($detail ? "50px" : "30px")};
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

const NormalPrice = styled.p<StoreNameProps>`
  font-size: ${({ $detail }) => ($detail ? "14px" : "11px")};
  font-weight: bold;
  color: ${({ $storeName }) =>
    storeColors[$storeName as StoreTypes].normalpriceColor};

  @media ${device.mobile} {
    font-size: ${({ $detail }) => ($detail ? "15px" : "12px")};
  }
  @media ${device.tablet} {
    font-size: ${({ $detail }) => ($detail ? "15px" : "14px")};
  }
`;

const DiscountPrice = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Discount = styled.div<StoreNameProps>`
  height: 100%;
  width: ${({ $detail }) => ($detail ? "50px" : "35px")};
  padding: 0 5px;
  background-color: ${({ $storeName }) =>
    storeColors[$storeName as StoreTypes].offerBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: ${({ $detail }) => ($detail ? "18px" : "13px")};
    font-weight: bold;
    color: ${({ $storeName }) =>
      storeColors[$storeName as StoreTypes].offerFontColor};
  }

  @media ${device.mobile} {
    width: 50px;
    p {
      font-size: ${({ $detail }) => ($detail ? "18px" : "13px")};
      font-weight: bold;
    }
  }

  @media ${device.tablet} {
    width: 40px;
    p {
      font-size: ${({ $detail }) => ($detail ? "18px" : "13px")};
      font-weight: bold;
    }
  }
`;

const Prices = styled.div`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 100%;
  padding: 0 7px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const InitialPrice = styled.p<StoreNameProps>`
  font-size: ${({ $detail }) => ($detail ? "11px" : "10px")};
  font-weight: bold;
  text-decoration: line-through;
  color: ${({ $storeName }) =>
    storeColors[$storeName as StoreTypes].initialPriceColor};

  @media ${device.mobile} {
    font-size: ${({ $detail }) => ($detail ? "12px" : "11px")};
  }

  @media ${device.tablet} {
    font-size: ${({ $detail }) => ($detail ? "12px" : "11px")};
  }
`;

export default StorePrice;
