import {
  useGetGameFromNameDBQuery,
  useGetGameFromScraperQuery,
} from "../store/apis/gameApi";

export const useGetGame = (game: string) => {
  const {
    data: nameDbData,
    error: nameDbError,
    // isLoading: isLoadingNameDb,
    isFetching: isFetchingNameDb,
  } = useGetGameFromNameDBQuery(game);

  const shouldSearchInScraper =
    !isFetchingNameDb &&
    (nameDbData?.nbHts === 0 || nameDbData?.data.length === 0);

  const {
    data: scraperData,
    error: scraperError,
    // isLoading: scraperLoading,
    isFetching: scraperIsFetching,
  } = useGetGameFromScraperQuery(game, {
    skip: !shouldSearchInScraper,
  });

  return {
    data: nameDbData?.data.length ? nameDbData : scraperData,
    error: nameDbError || scraperError,
    isLoading: isFetchingNameDb || scraperIsFetching,
  };
};
