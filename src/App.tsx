import { ThemeProvider } from "styled-components";
import "./App.css";

import AppRoutes from "./routes/AppRoutes";
import GlobalStyles from "./styles/globalStyles";
import { useAppSelector } from "./store/hooks/useAppSelector";

import { darkTheme, lightTheme } from "./styles/theme";
import Header from "./components/header/Header";
// import { useGetGameFromNameDBQuery } from "./store/apis/gameApi";

function App() {
  // const { isLoading, data, error } =
  //   useGetGameFromNameDBQuery("resident evil 2");
  // if (isLoading) return <div>Cargando games....</div>;
  // if (error) return <div>Ocurrió un error al cargar los datos</div>;
  const theme = useAppSelector((state) => state.ui.theme);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
