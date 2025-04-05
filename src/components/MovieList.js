import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) return <Typography>No movies available</Typography>;

  return (
    <Grid container spacing={3} padding={2}>
      {movies && movies.map((movie) => (
        <Grid item xs={12} sm={6} md={3} key={movie._id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{movie.movies.title}</Typography>
              <Typography variant="body2" color="textSecondary">{movie.movies.language}</Typography>
              <Typography variant="body2" color="textSecondary" fontStyle="italic">{movie.movies.genre.join(" ")}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
