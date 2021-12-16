import React from "react";
import { withRouter } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTvPage";
// import useTv from "../hooks/useTv";   Redundant
import { getTv } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const TvDetailsPage = (props) => {
  const { id } = props.match.params

  const { data: tv, error, isLoading, isError } = useQuery(
    ["tv", { id: id }],
    getTv
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tv ? (
        <>
          <PageTemplate tv={tv}>
            <TvDetails tv={tv} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for tv details</p>
      )}
    </>
  );
};

export default withRouter(TvDetailsPage);
