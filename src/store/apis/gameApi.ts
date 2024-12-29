import { FeaturedGames, GameData, GameDetails } from "./../../@types/global.d";
import { createApi } from "@reduxjs/toolkit/query/react";

import { fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { GameData, GameDetails } from "../../types";

export const gameApiSlice = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://priceprowler.vcaranciodev.online/api/v1",
  }),
  endpoints: (builder) => ({
    getGameFromNameDB: builder.query<GameData, string>({
      query: (game) => `/game/search?title=${game}`,
    }),
    getGameFromScraper: builder.query<GameData, string>({
      query: (game) => `/game?title=${game}`,
    }),
    getFeaturedGames: builder.query<FeaturedGames[], string>({
      query: () => `/game/feature`,
    }),
    getGameDetail: builder.query<GameDetails, string>({
      query: (id) => `/game/${id}`,
    }),
  }),
});

export const {
  useGetGameFromNameDBQuery,
  useGetGameDetailQuery,
  useGetGameFromScraperQuery,
  useGetFeaturedGamesQuery,
} = gameApiSlice;
