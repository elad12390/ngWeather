import {createAction, props} from '@ngrx/store';

export const hideCity = createAction('[Cities] Hide City', props<{id: number}>());
export const showCity = createAction('[Cities] Show City', props<{id: number}>());
