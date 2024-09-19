import styled from "styled-components";
import { Store, StoreTypes } from "../../types";
import { device } from "../../styles/media";
import { StyledStoreIcon } from "../logo";

import { storeColors } from "../../styles/theme";
import GamepassIcon from "./GamepassIcon";

interface StorePriceProps {
  store: Store;
}

const StorePrice = ({ store }: StorePriceProps) => {
  return (
    <StoreGame href={store.url} target="blank" $storeName={store.store}>
      <StoreInfo>
        <StyledStoreIcon store={store.store} />
        {store.store === "Xbox" && store.gamepass && (
          <GamepassIcon height="25px" fill="#f2ecff" />
        )}
      </StoreInfo>
      {store.info[0].discount_percent !== "0" &&
      store.info[0].discount_percent !== "-" ? (
        <DiscountPrice>
          <Discount $storeName={store.store}>
            <p>{`${store.info[0].discount_percent}%`}</p>
          </Discount>
          <Prices>
            <InitialPrice
              $storeName={store.store}
            >{`${store.info[0].initial_price} ${store.info[0].currency}`}</InitialPrice>
            <NormalPrice $storeName={store.store}>
              {`${store.info[0].final_price} ${store.info[0].currency}`}
            </NormalPrice>
          </Prices>
        </DiscountPrice>
      ) : (
        <Prices>
          <NormalPrice $storeName={store.store}>
            {`${store.info[0].initial_price} ${store.info[0].currency}`}
          </NormalPrice>
        </Prices>
      )}
    </StoreGame>
  );
};

interface StoreNameProps {
  $storeName: string;
}

const StoreGame = styled.a<StoreNameProps>`
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({ $storeName }) =>
    storeColors[$storeName as StoreTypes].cardBackground};
  width: 100%;
  height: 30px;
  padding-left: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: ${({ $storeName }) =>
    storeColors[$storeName as StoreTypes].cardFontColor};
  @media ${device.tablet} {
    height: 35px;
  }
  transition: background-color 300ms ease, transform 300ms ease;

  &:hover {
    background-color: ${({ $storeName }) =>
      storeColors[$storeName as StoreTypes].hoverCardBackground};
    transform: translate(0, -1px);
  }

  /* @media ${device.laptop} {
    height: 25px;
  } */
`;

const StoreInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const NormalPrice = styled.p<StoreNameProps>`
  font-size: 11px;
  font-weight: bold;
  color: ${({ $storeName }) =>
    storeColors[$storeName as StoreTypes].normalpriceColor};

  @media ${device.mobile} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }

  /* @media ${device.laptop} {
    font-size: 13px;
  } */
`;

const DiscountPrice = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Discount = styled.div<StoreNameProps>`
  height: 100%;
  width: 35px;
  padding: 0 5px;
  background-color: ${({ $storeName }) =>
    storeColors[$storeName as StoreTypes].offerBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 13px;
    font-weight: bold;
    color: ${({ $storeName }) =>
      storeColors[$storeName as StoreTypes].offerFontColor};
  }

  @media ${device.mobile} {
    width: 50px;
    p {
      font-size: 18px;
      font-weight: bold;
    }
  }

  @media ${device.tablet} {
    width: 40px;
    p {
      font-size: 16px;
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
  font-size: 10px;
  font-weight: bold;
  text-decoration: line-through;
  color: ${({ $storeName }) =>
    storeColors[$storeName as StoreTypes].initialPriceColor};

  @media ${device.mobile} {
    font-size: 11px;
  }

  @media ${device.tablet} {
    font-size: 11px;
  }

  /* @media ${device.laptop} {
    display: none;
  } */
`;

export default StorePrice;

//todo: modificar xbox card si es que esta disponible en gamepass
