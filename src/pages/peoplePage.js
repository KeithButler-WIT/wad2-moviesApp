import React from "react";
import PageTemplate from "../components/templatePeopleListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPeoples} from '../api/tmdb-api'
import favIcon from '../components/cardIcons/addToFavorites'

const PeoplePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover actors', getPeoples)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const peoples = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = peoples.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (peopleId) => true

  return (
    <PageTemplate
      title="Discover Actors"
      peoples={peoples}
      action={(people) => {
        return <favIcon.AddToPeopleFavoritesIcon people={people} />
      }}
    />
  );
};

export default PeoplePage;
