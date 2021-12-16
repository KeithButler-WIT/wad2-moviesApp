import React, { useContext } from "react";
import PageTemplate from "../components/templateTvListPage";
import { TvsContext } from "../contexts/tvsContext";
import { useQueries } from "react-query";
import { getTv } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import favIcon from "../components/cardIcons/removeFromFavorites";

const FavoriteTvsPage = () => {
  const {favorites: tvIds } = useContext(TvsContext);

  // Create an array of queries and run in parallel.
  const favoriteTvQueries = useQueries(
    tvIds.map((tvId) => {
      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTv,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteTvQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const tvs = favoriteTvQueries.map((q) => q.data);
  const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Tv Shows"
      tvs={tvs}
      action={(tv) => {
        return (
          <>
            <favIcon.RemoveFromTvFavoritesIcon tv={tv} />
          </>
        );
      }}
    />
  );
};

export default FavoriteTvsPage;
