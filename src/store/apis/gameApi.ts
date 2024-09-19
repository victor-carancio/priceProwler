import { createApi } from "@reduxjs/toolkit/query/react";

import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { GameData, GameDetail } from "../../types";

export const gameApiSlice = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://priceprowler.vcaranciodev.online/api/v1",
  }),
  endpoints: (builder) => ({
    getGameFromNameDB: builder.query<GameData, string>({
      query: (game) => `/game/search?title=${game}`,
    }),
    getGameDetail: builder.query<GameDetail, string>({
      query: (id) => `/game/${id}`,
    }),
  }),
});

export const { useGetGameFromNameDBQuery, useGetGameDetailQuery } =
  gameApiSlice;
