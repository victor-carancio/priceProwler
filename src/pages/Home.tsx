import { useGetFeaturedGamesQuery } from "../store/apis/gameApi";
import { MainContainer } from "./Results";
import FeatureGames from "../components/featureGames/FeatureGames";
import Loading from "../components/Loading";

const Home = () => {
  const { data, isLoading, error } = useGetFeaturedGamesQuery("");

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <>Algo salió mal</>;
  }
  // console.log(data);
  return (
    <>
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
