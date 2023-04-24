import axios from 'axios';

export const BASE_URL = ''; //insert the api link here

export const getAllWeather = () =>
  axios.get(`${BASE_URL}`);

export const getSingleWeather = (id) => axios.get(`${BASE_URL}/${id}`);