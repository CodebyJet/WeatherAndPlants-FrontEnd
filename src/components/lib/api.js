import axios from 'axios';

export const BASE_URL = 'http://api.weatherapi.com/v1'; //insert the api link here

// http://api.weatherapi.com/v1/current.json?q=London

const ENDPOINTS = {
  currentWeather: (id) =>
    `${BASE_URL}/current.json?key=${process.env.REACT_APP_VALUE}&q=${id}`,
  forecastWeather: (id) =>
    `${BASE_URL}/forecast.json?key=${process.env.REACT_APP_VALUE}&q=${id}`,
  historyWeather: (id, date) =>
    `${BASE_URL}/history.json?key=${process.env.REACT_APP_VALUE}&q=${id}&dt=${date}`
};


const GET = (endpoint) =>
  axios.get(
    endpoint
  );


  
  export const API = { GET, ENDPOINTS };