import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, map, startWith, take, tap} from 'rxjs/operators';
import cities from '../../../assets/json/israel_cities.json';
import {IWeatherAPICity} from '../../models/openweathermap.models';
import {addCity, findAndAddCity} from '../../store/locations.actions';
import {Store} from '@ngrx/store';
import {OpenWeatherMapApiService} from '../../services/open-weather-map-api.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  sortedCities: IWeatherAPICity[];

  formGroup = new FormGroup({
    searchText: new FormControl('')
  });

  filteredOptions: Observable<IWeatherAPICity[]>;

  constructor(
    private service: OpenWeatherMapApiService,
    private store: Store) {
    this.sortedCities = cities.sort((c1, c2) => c1.name.localeCompare(c2.name));
  }

  ngOnInit(): void {
    this.filteredOptions = this.formGroup.get('searchText').valueChanges.pipe(
      startWith(''),
      debounceTime(200),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): IWeatherAPICity[] {
    return this.sortedCities.filter(c => c.name.toLowerCase().includes(value.toLowerCase()));
  }

  onCitySelection(val: IWeatherAPICity): void {
    console.log('dispatching', {name: val.name});
    this.store.dispatch(findAndAddCity({name: val.name}));

    // This is for waiting for the next draw.. (because this happens on click and i need to wait for angular to render first)
    setTimeout(() => {
      this.formGroup.get('searchText').setValue('');
    }, 0);
  }
}
