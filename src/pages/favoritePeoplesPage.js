import React, { useContext } from "react";
import PageTemplate from "../components/templatePeopleListPage";
import { PeoplesContext } from "../contexts/peoplesContext";
import { useQueries } from "react-query";
import { getPeople } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoritePeoplesPage = () => {
  const {favorites: peopleIds } = useContext(PeoplesContext);

  // Create an array of queries and run in parallel.
  const favoritePeopleQueries = useQueries(
    peopleIds.map((peopleId) => {
      return {
        queryKey: ["people", { id: peopleId }],
        queryFn: getPeople,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoritePeopleQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const peoples = favoritePeopleQueries.map((q) => q.data);
  const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Peoples"
      peoples={peoples}
      action={(people) => {
        return (
          <>
            <RemoveFromFavorites people={people} />
            <WriteReview people={people} />
          </>
        );
      }}
    />
  );
};

export default FavoritePeoplesPage;
