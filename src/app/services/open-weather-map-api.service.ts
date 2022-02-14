import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class OpenWeatherMapApiService {


  constructor(private httpClient: HttpClient) {
    console.log('mewo');
  }

  getCityList() {
    return this.httpClient.get();
  }


  test(): void {
    console.log('mewo');
  }
}
