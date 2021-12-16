import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTvs} from '../api/tmdb-api'
import favIcon from '../components/cardIcons/addToFavorites'
import { withRouter } from "react-router-dom";

const TvPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover tv shows', getTvs)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = tvs.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (tvId) => true

  return (
    <PageTemplate
      title="Discover Tv Shows"
      tvs={tvs}
      action={(tv) => {
        return <favIcon.AddToTvFavoritesIcon tv={tv} />
      }}
    />
  );
};

export default withRouter(TvPage);
