import axios from 'axios';

const BASE_URL = 'https://bookmyshowbackend-fg92.onrender.com'; // or your backend URL

export const getMoviesByCity = async (cityName) => {
  const response = await axios.get(`${BASE_URL}/api/cities/${cityName}/movies`);
  return response.data || [];
};
