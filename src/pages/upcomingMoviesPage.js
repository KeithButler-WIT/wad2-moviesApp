// import React from "react";
// import PageTemplate from '../components/templateMovieListPage';
// import { useQuery } from 'react-query';
// import Spinner from '../components/spinner';
// import { getUpcomingMoviesUpcoming } from "../api/tmdb-api";
// import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'

// const UpcomingMoviesPage = (props) => {
//   const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMoviesUpcoming)

//   if (isLoading) {
//     return <Spinner />
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>
//   }
//   const movies = data.results;

//   // const [movies, setMovies] = useState([]);
//   // Redundant, but necessary to avoid app crashing.
//   const upcoming = movies.filter(m => m.upcoming)
//   localStorage.setItem('upcoming', JSON.stringify(upcoming))
//   const addToUpcoming = (movieId) => true

//   // const addToPlaylist = (movieId) => {
//   //   const updatedMovies = movies.map((m) =>
//   //     m.id === movieId ? { ...m, upcoming: true } : m
//   //   );
//   //   setMovies(updatedMovies);
//   // };

//   // useEffect(() => {
//   //     getUpcomingMoviesUpcoming().then(movies => {
//   //       setMovies(movies);
//   //     });
//   //     // eslint-disable-next-line react-hooks/exhaustive-deps
//   //   }, []);

//   return (
//     <PageTemplate
//       title='Upcoming Movies'
//       movies={movies}
//       action={(movie) => {
//         return <AddToPlaylistIcon movie={movie} />
//       }}
//     />
//   );
// };
// export default UpcomingMoviesPage;

// import React, { useContext } from "react";
// import PageTemplate from "../components/templateMovieListPage";
// import { MoviesContext } from "../contexts/moviesContext";
// import { useQueries } from "react-query";
// import { getUpcomingMoviesUpcoming } from "../api/tmdb-api";
// import Spinner from '../components/spinner';
// import AddToPlaylistsIcon from "../components/cardIcons/addToPlaylist";

// const UpcomingMoviesPage = () => {
//   const {upcomings: movieIds } = useContext(MoviesContext);

//   // Create an array of queries and run in parallel.
//   const upcomingMovieQueries = useQueries(
//     movieIds.map((movieId) => {
//       return {
//         queryKey: ["movie", { id: movieId }],
//         queryFn: getUpcomingMoviesUpcoming,
//       };
//     })
//   );
//   // Check if any of the parallel queries is still loading.
//   const isLoading = upcomingMovieQueries.find((m) => m.isLoading === true);

//   if (isLoading) {
//     return <Spinner />;
//   }
//   const movies = upcomingMovieQueries.map((q) => q.data);
//   const toDo = () => true;

//   return (
//     <PageTemplate
//       title="Upcoming Movies"
//       movies={movies}
//       action={(movie) => {
//         return (
//           <>
//             <AddToPlaylistsIcon movie={movie} />
//           </>
//         );
//       }}
//     />
//   );
// };

// export default UpcomingMoviesPage;

import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMoviesUpcoming} from '../api/tmdb-api'
import AddToPlaylistsIcon from "../components/cardIcons/addToPlaylist";

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getMoviesUpcoming)

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
  const addToUpcomings = (movieId) => true

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
