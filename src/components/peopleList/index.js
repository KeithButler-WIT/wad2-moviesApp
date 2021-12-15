import React from "react";
import People from "../peopleCard";
import Grid from "@material-ui/core/Grid";

const PeopleList = ( {peoples, action }) => {
  let peopleCards = peoples.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <People key={m.id} people={m} action={action} />
    </Grid>
  ));
  return peopleCards;
};

export default PeopleList;
