import { Component, OnInit } from '@angular/core';
import {IWeatherAPICity} from '../../models/openweathermap.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedCity($event: IWeatherAPICity) {

  }
}
