import React from "react";
import { withRouter } from "react-router-dom";
import PeopleDetails from "../components/peopleDetails";
import PageTemplate from "../components/templatePeoplePage";
// import usePeople from "../hooks/usePeople";   Redundant
import { getPeople } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const PeopleDetailsPage = (props) => {
  const { id } = props.match.params

  const { data: people, error, isLoading, isError } = useQuery(
    ["people", { id: id }],
    getPeople
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {people ? (
        <>
          <PageTemplate people={people}>
            <PeopleDetails people={people} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for people details</p>
      )}
    </>
  );
};

export default withRouter(PeopleDetailsPage);
