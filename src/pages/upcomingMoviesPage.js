import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMoviesUpcoming} from '../api/tmdb-api'
import AddToPlaylistsIcon from "../components/cardIcons/addToPlaylist";

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getMoviesUpcoming)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const upcomings = movies.filter(m => m.upcoming)
  localStorage.setItem('upcomings', JSON.stringify(upcomings))
  const addToPlaylist = (movieId) => true

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistsIcon movie={movie} />
      }}
    />
  );
};

export default UpcomingMoviesPage;
