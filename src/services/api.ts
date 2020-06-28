import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cineplus.herokuapp.com',
});

export default api;
