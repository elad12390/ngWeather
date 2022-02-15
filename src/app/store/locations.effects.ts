import {Injectable} from '@angular/core';
import {OpenWeatherMapApiService} from '../services/open-weather-map-api.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {addCity, findAndAddCity} from './locations.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Injectable()
export class LocationsEffects {
  loadCityData$ = createEffect(() => this.action$.pipe(
    ofType(findAndAddCity),
    switchMap((cityData) => this.service.getCityWeather(cityData.name).pipe(
      map((city) => addCity(city)),
      catchError(() => EMPTY)
    ))
  ));

  constructor(private action$: Actions, private service: OpenWeatherMapApiService) {
  }
}
