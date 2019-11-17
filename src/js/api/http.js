import axios from 'axios';

const http = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.railwayapi.com/v2/suggest-station/name/',
  headers: {
    Accept: 'application/json'
  }
});

http.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default http;