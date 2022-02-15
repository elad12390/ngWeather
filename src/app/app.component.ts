import {Component, OnInit} from '@angular/core';
import {ApplicationStore} from './store/store';
import {Store} from '@ngrx/store';
import {getGeoLocationCity} from './store/locations.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';

  constructor(private store: Store<ApplicationStore>) {}

  ngOnInit(): void {
    this.store.dispatch(getGeoLocationCity());

  }
}
