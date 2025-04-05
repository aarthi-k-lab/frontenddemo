import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { getMoviesByCity } from '../services/api';
import { Container, Typography } from '@mui/material';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const city = 'Bangalore'; // can be dynamic later

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMoviesByCity(city);
        setMovies(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovies();
  }, [city]);

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Movies in {city}
      </Typography>
      <MovieList movies={movies} />
    </Container>
  );
};

export default Home;
