import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {ApplicationStore} from '../../store/store';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {
  cards$ = this.store.select('locations');

  constructor(private store: Store<ApplicationStore>) { }
  ngOnInit(): void {
  }

}
