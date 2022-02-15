import {createReducer, on} from '@ngrx/store';
import {addCity, deleteCity, findAndAddCity, updateCity} from './locations.actions';
import {WeatherCardData} from '../models/models';

export const locationsInitialState: ReadonlyArray<WeatherCardData> = [];

export const locationsReducer = createReducer(
  locationsInitialState,
  on(addCity, (state, cityPayload) => {
    if (!state.map(c => c.id).includes(cityPayload.id)) {
      return [...state, cityPayload];
    }
    return state;
  }),
  on(findAndAddCity, (state, cityNamePayload) => {
    return state;
  }),
  on(deleteCity, (state, idPayload) => {
    const idx = state.findIndex(data => data.id === idPayload.id);
    return [...state.slice(0, idx), ...state.slice(idx + 1, state.length)];
  }),
  on(updateCity, (state, payload) => {
    const city = state.find(c => c.id === payload.id);
    const {status, degree, date, location} = payload.data;
    city.date = date;
    city.degree = degree;
    city.status = status;
    city.location = location;
    return state;
  })
);

