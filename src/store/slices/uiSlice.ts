import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  isSidebarOpen: boolean;
  theme: "light" | "dark";
}

const initialState: UiState = {
  isSidebarOpen: false,
  theme: "light",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleSidebar, toggleTheme } = uiSlice.actions;
