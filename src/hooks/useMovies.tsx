import React, { useEffect, useState } from "react";
import movieDbApi from "../api/movieDbAPI";
import { Movie, MovieDBResponse } from "../interfaces/movieInterface";

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRate: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRate: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDbApi.get<MovieDBResponse>("/now_playing");
    const popularPromise = movieDbApi.get<MovieDBResponse>("/popular");
    const topRatedPromise = movieDbApi.get<MovieDBResponse>("/top_rated");
    const upcomingPromise = movieDbApi.get<MovieDBResponse>("/upcoming");
    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);
    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRate: response[2].data.results,
      upcoming: response[3].data.results,
    })
    setIsLoading(false);
  };

  useEffect(() => {
    // get now_playing
    getMovies();
  }, []);
  return {
    ...moviesState,
    isLoading,
  };
};
