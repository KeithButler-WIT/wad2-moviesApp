import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { PeoplesContext } from "../../contexts/peoplesContext";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function PeopleCard({ people, action }) {
  const classes = useStyles();
  const { favorites, addToFavorites } = useContext(PeoplesContext);

  if (favorites.find((id) => id === people.id)) {
    people.favorite = true;
  } else {
    people.favorite = false
  }

  // if (playlists.find((id) => id === people.id)) {
  //   people.playlist = true;
  // } else {
  //   people.playlist = false
  // }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(people);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        avatar={
          people.favorite ? (
            <Avatar className={classes.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {people.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        image={
          people.poster_path
            ? `https://image.tmdb.org/t/p/w500/${people.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              {people.details}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(people)}
        
        <Link to={`/peoples/${people.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
