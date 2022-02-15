import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, map, startWith, take, tap} from 'rxjs/operators';
import cities from '../../../assets/json/israel_cities.json';
import {IWeatherAPICity} from '../../models/openweathermap.models';
import {addCity, findAndAddCity} from '../../store/locations/locations.actions';
import {Store} from '@ngrx/store';
import {OpenWeatherMapApiService} from '../../services/open-weather-map-api.service';
import {MatOptionSelectionChange} from '@angular/material/core';
import {ApplicationStore} from '../../store/store';
import {hideCity} from '../../store/cities/cities.actions';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  cities$: Observable<IWeatherAPICity[]> = this.store.select('cities')
    .pipe(map(c => c.filtered));

  cities: IWeatherAPICity[] = [];

  formGroup = new FormGroup({
    searchText: new FormControl('')
  });

  filteredOptions: Observable<IWeatherAPICity[]>;

  constructor(private service: OpenWeatherMapApiService, private store: Store<ApplicationStore>) {}

  ngOnInit(): void {
    this.store.select('cities')
      .pipe(map(c => c.filtered))
      .subscribe(c => {
      console.log('wowodsagkfsdahf', c);
      this.cities = c;
    });

    this.filteredOptions = this.formGroup.get('searchText').valueChanges.pipe(
      startWith(''),
      debounceTime(200),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): IWeatherAPICity[] {
    return this.cities.filter(c => c.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .includes(value.toLowerCase()));
  }

  onCitySelection($event: MatOptionSelectionChange, val: IWeatherAPICity): void {
    if (!$event.isUserInput) { return; }
    console.log('dispatching', {name: val.name});
    this.store.dispatch(findAndAddCity({name: val.name}));
    this.store.dispatch(hideCity({id: val.id}));

    // This is for waiting for the next draw.. (because this happens on click and i need to wait for angular to render first)
    setTimeout(() => {
      this.formGroup.get('searchText').setValue('');
    }, 0);
  }
}
