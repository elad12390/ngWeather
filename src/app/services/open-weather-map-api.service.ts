import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICurrentWeatherDataResponse, IWeatherAPICity} from '../models/openweathermap.models';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OpenWeatherMapApiService {


  constructor(private httpClient: HttpClient) {
    console.log('mewo');
  }

  getCityWeather(city: IWeatherAPICity): Observable<ICurrentWeatherDataResponse> {
    return this.httpClient.get<ICurrentWeatherDataResponse>('weather', { params: { q: city.name }});
  }


  test(): void {
    console.log('mewo');
  }
}
