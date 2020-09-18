const URL_WEATHER_FORECAST = (lat:string, lon:string): string => `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=0a13ecdfb4211180a2cbe23a01bb26a7`;

export default URL_WEATHER_FORECAST;
