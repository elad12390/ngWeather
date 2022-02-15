import {Injectable} from '@angular/core';
import {OpenWeatherMapApiService} from '../services/open-weather-map-api.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {addCity, findAndAddCity, getGeoLocationCity, refreshCity, updateCity} from './locations.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {EMPTY, from, Observable} from 'rxjs';
import {getGeolocation} from '../utils/utils';

@Injectable()
export class LocationsEffects {
  loadCityData$ = createEffect(() => this.action$.pipe(
    ofType(findAndAddCity),
    switchMap((cityData) => this.service.getCityWeather(cityData.name).pipe(
      map((city) => addCity(city)),
      catchError(() => EMPTY)
    ))
  ));
  refreshCity$ = createEffect(() => this.action$.pipe(
    ofType(refreshCity),
    switchMap((cityData) => this.service.getCityWeather(cityData.name).pipe(
      map((city) => updateCity({id: city.id, data: city})),
      catchError(() => EMPTY)
    ))
  ));
  getGeolocationCity$ = createEffect(() => this.action$.pipe(
    ofType(getGeoLocationCity),
    switchMap(() => from(getGeolocation) as Observable<Position>),
    switchMap((loc) => this.service.getCityWeatherByLatLong(loc.coords.latitude, loc.coords.longitude)),
    map((data) => addCity(data))
  ));

  constructor(private action$: Actions, private service: OpenWeatherMapApiService) {
  }
}
