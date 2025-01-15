import { useMemo } from "react";
import {
  useGetCategoriesQuery,
  useGetGenresQuery,
} from "../store/apis/gameApi";

export const useGetFilters = () => {
  const {
    data: categoryData,
    error: categoryError,
    isLoading: categoryLoading,
  } = useGetCategoriesQuery("");
  const {
    data: genreData,
    error: genreError,
    isLoading: genreLoading,
  } = useGetGenresQuery("");

  return useMemo(
    () => ({
      genres: {
        data: genreData,
        error: genreError,
        isLoading: genreLoading,
      },
      categories: {
        data: categoryData,
        error: categoryError,
        isLoading: categoryLoading,
      },
    }),
    [
      genreData,
      genreError,
      genreLoading,
      categoryData,
      categoryError,
      categoryLoading,
    ]
  );
};
