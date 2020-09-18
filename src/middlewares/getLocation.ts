import { setCoordinates } from '../redux/actions/creators/currentEvent';

const getLocation = () => (dispatch: any) => {
  const options = { enableHighAccuracy: false, timeout: 8000, maximumAge: 10000 };

  const onGetLocation = (response: any) => {
    const { coords: { latitude, longitude } } = response;
    dispatch(setCoordinates({ latitude, longitude }));
  };

  const onError = (err: any) => console.log(err);

  navigator.geolocation.getCurrentPosition(onGetLocation, onError, options);
};

export default getLocation;
