import {WeatherCardData} from '../../models/models';
import {IWeatherAPICity} from '../../models/openweathermap.models';
import {createReducer, on} from '@ngrx/store';
import {hideCity, showCity} from './cities.actions';
import cities from '../../../assets/json/israel_cities.json';

export interface ICitiesState {
  filtered: IWeatherAPICity[];
  original: IWeatherAPICity[];
}

export const citiesInitialState: ICitiesState = {
  filtered: cities,
  original: cities
};

export const citiesReducer = createReducer(
  citiesInitialState,
  on(hideCity, (state, {id}) => ({
    ...state,
    filtered: state.filtered.filter(city => city.id !== id)
  })),
  on(showCity, (state, {id}) => ({
    ...state,
    filtered: [...state.filtered, state.original.find(c => c.id === id)]
      .sort((c1, c2) => c1.name.localeCompare(c2.name))
  }))
);
