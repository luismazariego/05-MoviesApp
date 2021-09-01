import React, { useEffect, useState } from "react";
import movieDbApi from "../api/movieDbAPI";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";
import { MovieFullDetails } from "../interfaces/movieInterface";

interface MovieDetails {
  cast: Cast[];
  isLoading: boolean;
  movieFull?: MovieFullDetails;
}

export const useMovieDetails = (movieId: number) => {
  const [movieDetailsState, setMovieDetailsState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  });

  const getMovieDetails = async () => {
    const getMovieDetailsPromise = movieDbApi.get<MovieFullDetails>(
      `/${movieId}`
    );
    const getCastPromise = movieDbApi.get<CreditsResponse>(
      `/${movieId}/credits`
    );
    const [movieDetailsResponse, castResponse] = await Promise.all([
      getMovieDetailsPromise,
      getCastPromise,
    ]);
    setMovieDetailsState({
      isLoading: false,
      cast: castResponse.data.cast,
      movieFull: movieDetailsResponse.data
    })
  };
  useEffect(() => {
    getMovieDetails()
  }, []);
  return {
    ...movieDetailsState
  };
};
