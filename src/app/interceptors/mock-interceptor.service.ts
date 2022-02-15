import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpClient
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import multipleWeather from '../../assets/mock/multiple-weather.json';
import {environment} from '../../environments/environment';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  urls = [
    // {
    //   url: 'weather',
    //   json: () => {
    //     const f = Math.floor(Math.random() * (multipleWeather.length - 1));
    //     const loc = multipleWeather[f];
    //     multipleWeather.splice(f, 1);
    //     return loc;
    //   }
    // }
  ];


  constructor() {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const mock = this.urls.find(u => request.url.replace(environment.baseUrl, '') === u.url);
    if (mock) {
      const response = new HttpResponse({status: 200, body: mock.json()});
      console.log(`Mocking url ${mock.url}`, mock);
      return of(response);
    }
    return next.handle(request);
  }
}
