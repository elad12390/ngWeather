import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {ApplicationStore} from '../../store/store';
import {WeatherCardData} from '../../models/models';
import {deleteCity, refreshCity, updateCity} from '../../store/locations.actions';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {
  cards$ = this.store.select('locations');

  constructor(private store: Store<ApplicationStore>) { }
  ngOnInit(): void {
    this.cards$.subscribe(() => console.log('cards$ changed'));
  }

  deleteCard(card: WeatherCardData): void {
    this.store.dispatch(deleteCity({id: card.id}));
  }

  updateCard(card: WeatherCardData): void {
    this.store.dispatch(refreshCity({name: card.location}));
  }
}
