import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import PeoplePage from "./pages/peopleDetailsPage";
import TvDetailsPage from "./pages/tvDetailsPage";
import TvPage from "./pages/tvPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import FavoritePeoplesPage from "./pages/favoritePeoplesPage";
import FavoriteTvsPage from "./pages/favoriteTvsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import TvReviewPage from "./pages/tvReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import PeoplesContextProvider from "./contexts/peoplesContext";
import TvsContextProvider from "./contexts/tvsContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          {" "}
          <Switch>
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </MoviesContextProvider>
        <PeoplesContextProvider>
          {" "}
          <Switch>
            <Route path="/peoples" component={PeoplePage} />
            <Route exact path="/peoples/favorites" component={FavoritePeoplesPage} />
          </Switch>
        </PeoplesContextProvider>
        <TvsContextProvider>
          {" "}
          <Switch>
            <Route path="/tv" component={TvPage} />
            <Route path="/tv/:id" component={TvDetailsPage} />
            <Route exact path="/tv/favorites" component={FavoriteTvsPage} />
            <Route exact path="/tv/reviews/:id" component={TvReviewPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </TvsContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
