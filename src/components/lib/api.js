import axios from 'axios';

export const BASE_URL = 'http://api.weatherapi.com/v1';
export const BASE_PLANT = 'https://www.perenual.com/api/species';

// http://api.weatherapi.com/v1/current.json?q=London

const ENDPOINTS = {
  currentWeather: (id) =>
    `${BASE_URL}/current.json?key=${process.env.REACT_APP_VALUE}&q=${id}`,
  forecastWeather: (id) =>
    `${BASE_URL}/forecast.json?key=${process.env.REACT_APP_VALUE}&q=${id}`,
  historyWeather: (id, date) =>
    `${BASE_URL}/history.json?key=${process.env.REACT_APP_VALUE}&q=${id}&dt=${date}`,
  allPlants: () =>
    `${BASE_PLANT}-list?page=1&key=${process.env.REACT_APP_VALUE_PLANT}`,
  currentPlant: (id) =>
    `${BASE_PLANT}/details/${id}?key=${process.env.REACT_APP_VALUE_PLANT}`,
  allPlantGuides: (id) =>
    `${BASE_PLANT}-care-guide-list?key=${process.env.REACT_APP_VALUE_PLANT}`
};

const GET = (endpoint) => axios.get(endpoint);

export const API = { GET, ENDPOINTS };
