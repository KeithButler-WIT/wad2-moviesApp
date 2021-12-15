import React from "react";  // useState/useEffect redundant 
import PeopleHeader from "../headerPeople";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { getPeopleImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
}));

const TemplatePeoplePage = ({ people, children }) => {
  const classes = useStyles();
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: people.id }],
    getPeopleImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters 

  return (
    <>
      <PeopleHeader people={people} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div className={classes.root}>
            {/* <GridList cellHeight={500} className={classes.gridList} cols={1}> */}
            {/*   {images.map((image) => ( */}
            {/*     <GridListTile key={image.file_path} className={classes.gridListTile} cols={1}> */}
            {/*       <img */}
            {/*         src={`https://image.tmdb.org/t/p/w500/${image.file_path}`} */}
            {/*         alt={image.poster_path} */}
            {/*       /> */}
            {/*     </GridListTile> */}
            {/*   ))} */}
            {/* </GridList> */}
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePeoplePage;
