import {createAction, props} from '@ngrx/store';
import {WeatherCardData} from '../models/models';

export const addCity = createAction('[Weather Locations] Add', props<WeatherCardData>());
export const findAndAddCity = createAction('[Weather Locations] Find And Add', props<{name: string}>());
export const deleteCity = createAction('[Weather Locations] Delete', props<{ id: number }>());
export const updateCity = createAction('[Weather Locations] Refresh', props<{ id: number, data: WeatherCardData }>());
