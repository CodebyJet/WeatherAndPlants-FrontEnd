import axios from 'axios';

export const BASE_URL = 'http://api.weatherapi.com/v1'; //insert the api link here

// http://api.weatherapi.com/v1/current.json?q=London

const ENDPOINTS = {
  singleWeather: (id) =>
    `${BASE_URL}/current.json?key=${process.env.REACT_APP_VALUE}&q=${id}`
};


const GET = (endpoint) =>
  axios.get(
    endpoint
  );


  
  export const API = { GET, ENDPOINTS };