import {
  SET_COORDINATES,
  SET_ADDRESS,
  SET_WEATHER,
  SET_ERROR,
} from '../types/action-types';

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const setCoordinates = (coordinates) => ({
  type: SET_COORDINATES,
  payload: coordinates,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

export const setWeather = (weather) => ({
  type: SET_WEATHER,
  payload: weather,
});
