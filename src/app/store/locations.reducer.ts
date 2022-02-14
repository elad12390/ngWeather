import {createReducer, on} from '@ngrx/store';
import {addCity, deleteCity, updateCity} from './locations.actions';
import {WeatherCardData} from '../models/models';

export const locationsInitialState = [] as WeatherCardData[];

const _locationsReducer = createReducer(
  locationsInitialState,
  on(addCity, (state, cityPayload) => {
    if (!state.map(c => c.id).includes(cityPayload.id)) {
      state.push(cityPayload);
    }
    return state;
  }),
  on(deleteCity, (state, idPayload) => {
    const idx = state.findIndex(data => data.id === idPayload.id);
    state.splice(idx, 1);
    return state;
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

