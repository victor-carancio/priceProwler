import { useGetFeaturedGamesQuery } from "../store/apis/gameApi";
import { MainContainer } from "./Results";
import FeatureGames from "../components/featureGames/FeatureGames";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";
import SearchError from "../components/SearchError";
const Home = () => {
  const { data, isLoading, error } = useGetFeaturedGamesQuery("");

  if (isLoading) {
    return <Loading />;
  }
  if (error) return <SearchError />;
  // console.log(data);
  return (
    <>
      <Helmet>
        <title>Comparador de Precios de Videojuegos - Price Prowler</title>
        <meta
          name="description"
          content="Encuentra los mejores precios para tus juegos en un solo lugar."
        />
      </Helmet>
      <MainContainer>
        {data?.map((featured, index) => {
          const { feature, games } = featured;
          return <FeatureGames key={index} feature={feature} games={games} />;
        })}
      </MainContainer>
    </>
  );
};

export default Home;
