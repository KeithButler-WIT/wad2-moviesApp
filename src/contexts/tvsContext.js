import React, { useState } from "react";

export const TvsContext = React.createContext(null);

const TvsContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} )
  const [favorites, setFavorites] = useState( [] ) // remove

  const addToFavorites = (tv) => {

    setFavorites([...favorites,tv.id])
  };
  // We will use this function in a later section
  const removeFromFavorites = (tv) => {
    setFavorites( favorites.filter(
      (mId) => mId !== tv.id
    ) )
  };

  const addReview = (tv, review) => {
    setMyReviews( {...myReviews, [tv.id]: review } )
  };

 return (
    <TvsContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {props.children}
    </TvsContext.Provider>
  );
};

export default TvsContextProvider;
