const URL_WEATHER_FORECAST = (lat:string, lon:string): string => `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=20631ac2d3ca1a158648dd1c8a3e141b`;

export default URL_WEATHER_FORECAST;
