import {WeatherCardData} from '../models/models';
import {IWeatherAPICity} from '../models/openweathermap.models';
import {ICitiesState} from './cities/cities.reducer';

export interface ApplicationStore {
  locations: WeatherCardData[];
  cities: ICitiesState;
}
