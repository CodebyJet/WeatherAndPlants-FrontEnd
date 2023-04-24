import axios from 'axios';
import { AUTH } from './auth';

export const BASE_URL = 'http://api.weatherapi.com/v1'; //insert the api link here

// http://api.weatherapi.com/v1/current.json?q=London
export const getSingleWeather = (id) => axios.get(`${BASE_URL}/current.json?q=${id}`);


const ENDPOINTS = {
  singleWeather: (id) => `${BASE_URL}/current.json?q=${id}`
};


const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${AUTH.getToken()}`
  }
});

const Access = {
  username: process.env.username,
  key: process.env.key,
  password : process.env.password,
  value : process.env.value,
};

const GET = (endpoint, headers, Access) =>
  headers ? axios.get(endpoint, headers, Access) : axios.get(endpoint);

  export const API = { GET, ENDPOINTS, getHeaders, Access };