import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} )
  const [favorites, setFavorites] = useState( [] ) // remove
  const [playlists, setPlaylist] = useState( [] ) // remove

  const addToFavorites = (movie) => {

    setFavorites([...favorites,movie.id])
  };
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToPlaylist = (movie) => {

    setPlaylist([...playlists,movie.id])
  };
  // We will use this function in a later section
  // const removeFromPlaylist = (movie) => {
  //   setPlaylist( playlists.filter(
  //     (mId) => mId !== movie.id
  //   ) )
  // };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

 return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addToPlaylist,
        // removeFromPlaylists,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;