import { configureStore } from "@reduxjs/toolkit";
import { gameApiSlice } from "../apis/gameApi";
import { uiSlice } from "../slices/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    [gameApiSlice.reducerPath]: gameApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gameApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
