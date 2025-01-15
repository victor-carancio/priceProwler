import {
  CategoriesFilter,
  FeaturedGames,
  FiltersData,
  GameData,
  GameDetails,
  GenresFilter,
} from "./../../@types/global.d";
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
    getGameWithFilters: builder.query<
      FiltersData,
      Record<string, string | number>
    >({
      query: (game) => {
        const queryString = new URLSearchParams(
          game as Record<string, string>
        ).toString();

        return `/game/filters?${queryString}&limit=20`;
      },
    }),
    getGameWithFiltersAndPagination: builder.query<FiltersData, string>({
      query: (game) => `/game/filters?${game}&limit=20`,
    }),

    getGameFromScraper: builder.query<GameData, string>({
      query: (game) => `/game?title=${game}`,
    }),
    getFeaturedGames: builder.query<FeaturedGames[], string>({
      query: () => `/game/feature`,
    }),
    getGenres: builder.query<GenresFilter, string>({
      query: () => `/game/genres`,
      keepUnusedDataFor: 60,
    }),
    getCategories: builder.query<CategoriesFilter, string>({
      query: () => `/game/categories`,
      keepUnusedDataFor: 60,
    }),
    getGameDetail: builder.query<GameDetails, string>({
      query: (id) => `/game/${id}`,
    }),
  }),
});

export const {
  useGetGameFromNameDBQuery,
  useLazyGetGameDetailQuery,
  useGetGameDetailQuery,
  useGetGameFromScraperQuery,
  useGetFeaturedGamesQuery,
  useGetGameWithFiltersQuery,
  useLazyGetGameWithFiltersQuery,
  useGetCategoriesQuery,
  useGetGenresQuery,
  useGetGameWithFiltersAndPaginationQuery,
} = gameApiSlice;
