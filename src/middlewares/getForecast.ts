import URL_GEOLOCATION_DATA from '../constants/urls';
import { setWeather } from '../redux/actions/creators/currentEvent';

const getForecast = (lat: string, long: string) => async (dispatch: any) => {
  const getLocation = await fetch(URL_GEOLOCATION_DATA(lat, long));
  const locationData = await getLocation.json();
  const weather = {
    temperatureNow: locationData?.current?.temp,
    humidity: locationData?.current?.humidity,
    windSpeed: locationData?.current?.wind_speed,
    description: locationData?.current?.weather[0]?.main,
  }

  dispatch(setWeather(weather));
};

export default getForecast;
