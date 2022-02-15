import {EWeatherStatus} from './enums';
import {ICurrentWeatherDataResponse, OpenWeatherMapWeather} from './openweathermap.models';
import {kelvinToCelsius, roundNDigits, unixSecondsToDate} from '../utils/utils';

export class WeatherStatus {
  private _status: EWeatherStatus;
  get status(): EWeatherStatus {
    return this._status;
  }

  private _code: number;
  get code(): number {
    return this._code;
  }

  statusText: string;

  constructor(weather: OpenWeatherMapWeather) {
    this._code = weather.id;
    this._status = this.getStatusFromCode(weather.id);
    this.statusText = weather.main;
  }

  getStatusFromCode(code: number): EWeatherStatus {
    if (code === 800) { return EWeatherStatus.Clear; }
    const hundreds = Math.floor(code / 100);
    switch (hundreds) {
      case 2: return EWeatherStatus.Thunderstorm;
      case 3: return EWeatherStatus.Drizzle;
      case 5: return EWeatherStatus.Rain;
      case 6: return EWeatherStatus.Snow;
      case 7: return EWeatherStatus.Atmosphere;
      case 8: return EWeatherStatus.Clouds;
      default: return EWeatherStatus.None;
    }
  }

  get emoji(): string {
    switch (this._status) {
      case EWeatherStatus.None: return '❓';
      case EWeatherStatus.Thunderstorm: return '⛈️';
      case EWeatherStatus.Drizzle: return '☔';
      case EWeatherStatus.Rain: return '🌧️';
      case EWeatherStatus.Snow: return '🌨️';
      case EWeatherStatus.Atmosphere: return '🌫️';
      case EWeatherStatus.Clear: return '🌤️';
      case EWeatherStatus.Clouds: return '☁️';
    }
  }
}


export class WeatherCardData {
  id: number;
  status?: WeatherStatus;
  degree?: number;
  date?: Date;
  location?: string;

  constructor(response: ICurrentWeatherDataResponse) {
    this.id = response.id;
    this.status = new WeatherStatus(response.weather[0]);
    this.degree = roundNDigits(2, kelvinToCelsius(response.main.temp));
    this.location = response.name;
    this.date = unixSecondsToDate(response.dt);
  }

}
