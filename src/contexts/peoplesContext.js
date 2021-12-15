import React, { useState } from "react";

export const PeoplesContext = React.createContext(null);

const PeoplesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] ) // remove

  const addToFavorites = (people) => {

    setFavorites([...favorites,people.id])
  };
  // We will use this function in a later section
  const removeFromFavorites = (people) => {
    setFavorites( favorites.filter(
      (mId) => mId !== people.id
    ) )
  };

 return (
    <PeoplesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {props.children}
    </PeoplesContext.Provider>
  );
};

export default PeoplesContextProvider;
