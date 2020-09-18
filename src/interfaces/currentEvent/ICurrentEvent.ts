export interface ICurrentEvent {
  id?: string,
  coordinates: ICoordinates;
  address: string;
  weather: {
    temperatureNow: string,
    humidity: string,
    windSpeed: string,
    description: string,
  },
}

export interface ICoordinates {
  latitude: string;
  longitude: string;
}
