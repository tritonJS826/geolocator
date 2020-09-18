import {
  SET_COORDINATES,
  SET_ADDRESS,
  SET_WEATHER,
  SET_ERROR,
} from '../actions/types/action-types';

const initialState = {
  error: null,
  coordinates: {
    latitude: null,
    longitude: null,
  },
  address: null,
  weather: {
    temperatureNow: null,
    humidity: null,
    windSpeed: null,
    weather: null,
  },
};

const userDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    case SET_COORDINATES:
      return {
        ...state,
        coordinates: payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: payload,
      };
    case SET_WEATHER:
      return {
        ...state,
        weather: payload,
      };
    default:
      return state;
  }
};
export default userDataReducer;
