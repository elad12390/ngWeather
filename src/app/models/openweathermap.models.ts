export interface OpenWeatherMapCoord {
  lon: number;
  lat: number;
}

export interface OpenWeatherMapWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface OpenWeatherMapMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface OpenWeatherMapWind {
  speed: number;
  deg: number;
}

export interface OpenWeatherMapClouds {
  all: number;
}

export interface OpenWeatherMapSys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface CurrentWeatherDataResponse {
  coord: OpenWeatherMapCoord;
  weather: OpenWeatherMapWeather[];
  base: string;
  main: OpenWeatherMapMain;
  visibility: number;
  wind: OpenWeatherMapWind;
  clouds: OpenWeatherMapClouds;
  dt: number;
  sys: OpenWeatherMapSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
