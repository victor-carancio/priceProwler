import { ThemeProvider } from "styled-components";
import "./App.css";

import AppRoutes from "./routes/AppRoutes";
import GlobalStyles from "./styles/globalStyles";
import { useAppSelector } from "./store/hooks/useAppSelector";

import { darkTheme, lightTheme } from "./styles/theme";
import Header from "./components/header/Header";
import { useEffect } from "react";
import Footer from "./components/footer";
// import { useGetGameFromNameDBQuery } from "./store/apis/gameApi";

function App() {
  const theme = useAppSelector((state) => state.ui.theme);

  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("disable-transition");
    }, 200);
  }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
