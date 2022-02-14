import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CurrentWeatherDataResponse} from '../models/openweathermap.models';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OpenWeatherMapApiService {


  constructor(private httpClient: HttpClient) {
    console.log('mewo');
  }

  getCityList(city: string): Observable<CurrentWeatherDataResponse> {
    return this.httpClient.get<CurrentWeatherDataResponse>('weather', { params: { q: city }});
  }


  test(): void {
    console.log('mewo');
  }
}
