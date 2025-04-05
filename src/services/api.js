import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // or your backend URL

export const getMoviesByCity = async (cityName) => {
  const response = await axios.get(`${BASE_URL}/api/cities/${cityName}/movies`);
  return response.data || [];
};
