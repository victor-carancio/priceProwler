import { createSlice } from "@reduxjs/toolkit";
import { ThemeEnum } from "../../@types/global.d";

interface UiState {
  isSidebarOpen: boolean;
  theme: ThemeEnum.DARK | ThemeEnum.LIGHT;
}

const initialTheme =
  (localStorage.getItem("theme") as ThemeEnum) || ThemeEnum.LIGHT;
const initialState: UiState = {
  isSidebarOpen: false,
  theme: initialTheme,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleTheme: (state) => {
      state.theme =
        state.theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
      localStorage.setItem("theme", state.theme);
    },
    // clearTheme:()=>{
    //   localStorage.removeItem("theme")
    //   return {...initialState}
    // }
  },
});

export const { toggleSidebar, toggleTheme } = uiSlice.actions;
