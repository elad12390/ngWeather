import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WeatherCardData, WeatherStatus} from '../../models/models';
import {EWeatherStatus} from '../../models/enums';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input() data: WeatherCardData = {
    id: 3,
    date: new Date(),
    degree: 36,
    status: new WeatherStatus({id: 700, main: 'test', description: 'yo', icon: ''}),
    location: 'San Fransisco'
  };
  @Output() delete = new EventEmitter<void>();
  @Output() update = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  statusClass = () => `gradient-${EWeatherStatus[this.data.status.status].toLowerCase()}`;
}
