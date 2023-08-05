import axios from 'axios';
import { AUTH } from './auth';

export const BASE_WEATHER_URL = 'http://api.weatherapi.com/v1';
export const BASE_PLANT_URL = 'https://www.perenual.com/api/species';

// http://api.weatherapi.com/v1/current.json?q=London

const ENDPOINTS = {
  currentWeather: (id) =>
    `${BASE_WEATHER_URL}/current.json?key=${process.env.REACT_APP_VALUE_WEATHER}&q=${id}`,
  forecastWeather: (id) =>
    `${BASE_WEATHER_URL}/forecast.json?key=${process.env.REACT_APP_VALUE_WEATHER}&q=${id}`,
  historyWeather: (id, date) =>
    `${BASE_WEATHER_URL}/history.json?key=${process.env.REACT_APP_VALUE_WEATHER}&q=${id}&dt=${date}`,
  allPlants: () =>
    `${BASE_PLANT_URL}-list?page=1&key=${process.env.REACT_APP_VALUE_PLANT}`,
  currentPlant: (id) =>
    `${BASE_PLANT_URL}/details/${id}?key=${process.env.REACT_APP_VALUE_PLANT}`,
  allPlantGuides: (id) =>
    `${BASE_PLANT_URL}-care-guide-list?key=${process.env.REACT_APP_VALUE_PLANT}`,
  login: `${process.env.REACT_APP_BASE_URL}/api/login`,
  register: `${process.env.REACT_APP_BASE_URL}/api/register`,
  allUsers: '/api/users',
  singleUser: (id) => `${process.env.REACT_APP_BASE_URL}/api/users/${id}`,
  cloudinary: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`
};

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${AUTH.getToken()}`
  }
});

const GET = (endpoint, headers) =>
  headers ? axios.get(endpoint, headers) : axios.get(endpoint);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
const PUT = (endpoint, body, headers) => axios.put(endpoint, body, headers);
const DELETE = (endpoint, headers) => axios.delete(endpoint, headers);

export const API = { GET, POST, PUT, DELETE, ENDPOINTS, getHeaders };
