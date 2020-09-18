import Geocoder from 'react-native-geocoding';
import { GOOGLE_MAP_TOKEN } from '../constants/tokens';

import { setAddress, setError } from '../redux/actions/creators/currentEvent';

Geocoder.init(GOOGLE_MAP_TOKEN);

const round = (numb: number) => Math.round((numb + Number.EPSILON) * 100) / 100;

const setPlace = (lat: string, long: string) => async (dispatch: any) => {
  try {
    const rawPlace = await Geocoder.from(round(Number(lat)), Number((long)));
    const address = rawPlace.results[0].formatted_address;
    dispatch(setAddress(address));
  } catch (error) {
    dispatch(setError(error.message))
  }
};

export default setPlace;
