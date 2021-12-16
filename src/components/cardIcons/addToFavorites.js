import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { PeoplesContext} from "../../contexts/peoplesContext";
import { TvsContext } from "../../contexts/tvsContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToMovieFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavorites(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

const AddToPeopleFavoritesIcon = ({ people }) => {
  const context = useContext(PeoplesContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavorites(people);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

const AddToTvFavoritesIcon = ({ tv }) => {
  const context = useContext(TvsContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavorites(tv);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

const favIcon = {AddToMovieFavoritesIcon,AddToPeopleFavoritesIcon,AddToTvFavoritesIcon}

export default favIcon;
