import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICurrentWeatherDataResponse, IWeatherAPICity} from '../models/openweathermap.models';
import {Observable} from 'rxjs';
import {WeatherCardData} from '../models/models';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OpenWeatherMapApiService {

  constructor(private httpClient: HttpClient) {
  }

  getCityWeather(cityName: string): Observable<WeatherCardData> {
    return this.httpClient.get<ICurrentWeatherDataResponse>('weather', { params: { q: cityName }}).pipe(
      map(data => new WeatherCardData(data))
    );
  }

  getCityWeatherByLatLong(lat: number, lon: number): Observable<WeatherCardData> {
    return this.httpClient.get<ICurrentWeatherDataResponse>('weather', { params: { lat: lat.toString(), lon: lon.toString() }}).pipe(
      map(data => new WeatherCardData(data))
    );
  }
}
