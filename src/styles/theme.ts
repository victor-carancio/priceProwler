import { DefaultTheme } from "styled-components/dist/types";
import { StoreStyles, StoreTypes } from "../@types/global.d";

export const lightTheme: DefaultTheme = {
  // body: "#fff",
  // text: "#000",
  // background: "#363537",
  body: "#faf8ff",
  text: "#383838",
  textBody: "#383838",
  textHover: "#050505",
  header: "#eeeeee",

  background: "#eeeeee",
  card: "#faf8ff",
  button: "#2a475e",
  buttonHover: "#1a2c3b",
  logo: "#3e3c4b",
  logoHover: "#171623",

  cardGame: "#eeeeee",
  cardGameOpaque: "rgba(238, 238, 238,0.5)",
  cardGameGradient: "rgba(238, 238, 238,0.85) 1%,rgba(238, 238, 238,1) 100%",
  bodyBackgroundGradient:
    "rgba(250, 248, 255,0.80) 10%, rgba(250, 248, 255,1) 80%",

  footerText: "#f2ecff",
  footerBackground: "#1a2c3b", //"#2a475e", // #1a2c3b
  headerOverlay: "rgb(223, 223, 223)",
  headerOverlayBackground: "rgba(30, 30, 30, 0.8)", //"rgba(238, 238, 238, 0.8)",
  customButtonTextColor: "#f2ecff",
  selectBackground: "#eeeeee",
  selectBorder: "#e6e6e6",
};

export const darkTheme: DefaultTheme = {
  body: "#282828",
  text: "#f2ecff",
  textBody: "#d1cfcb",
  textHover: "#b4aebf",
  header: "#1e1e1e",

  background: "#1e1e1e",
  card: "#424449",
  button: "#2a475e",
  buttonHover: "#1a2c3b",
  logo: "#f2ecff",
  logoHover: "#b4aebf",

  cardGame: "#2e2f33",
  cardGameOpaque: "rgba(46, 47, 51,0.5)",
  cardGameGradient: "circle,rgba(66, 68, 73,0.95) 1%,rgba(66, 68, 73,1) 100%",
  bodyBackgroundGradient:
    "circle,rgba(40, 40, 40,0.9) 10%, rgba(40, 40, 40,1) 80%",
  footerText: "#f2ecff",
  footerBackground: "#0f0f0f", // #0a0909
  headerOverlay: "rgb(36, 36, 36)",
  headerOverlayBackground: "rgba(10, 9, 9, 0.75)", //"rgba(30, 30, 30, 0.8)",
  customButtonTextColor: "#f2ecff",

  selectBackground: "#2e2f33",
  selectBorder: "#232427",
};

// "rgba(40, 40, 40,0.9) 0%, rgba(40, 40, 40,1) 75%"

export const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const storeColors: Record<StoreTypes, StoreStyles> = {
  [StoreTypes.STEAM_STORE]: {
    cardBackground: "#2a475e",
    hoverCardBackground: "#1a2c3b",
    cardFontColor: "#f2ecff",
    offerBackground: "#4c6b22",
    offerFontColor: "#BEEE11",
    normalpriceColor: "#f2ecff", //"#BEEE11"
    initialPriceColor: "#c1ccd4",
  },
  [StoreTypes.EPIC_STORE]: {
    cardBackground: "#202024",
    hoverCardBackground: "#050505",
    cardFontColor: "#f2ecff",
    offerBackground: "#0056b1",
    offerFontColor: "#00d5fa",
    normalpriceColor: "#f2ecff", //"#00d5fa"
    initialPriceColor: "#c1ccd4",
  },
  [StoreTypes.XBOX_STORE]: {
    cardBackground: "#008746", // #151517
    hoverCardBackground: "#016635",
    cardFontColor: "#f2ecff",
    offerBackground: "#c9a900",
    offerFontColor: "#f2ecff",
    normalpriceColor: "#f2ecff", //"#ffd800"
    initialPriceColor: "#c1ccd4",
  },
};
