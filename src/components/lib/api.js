import axios from 'axios';

export const BASE_URL = 'http://api.weatherapi.com/v1'; //insert the api link here

// http://api.weatherapi.com/v1/current.json?q=London
export const getSingleWeather = (id) => axios.get(`${BASE_URL}/current.json?q=${id}`);


