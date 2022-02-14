import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './routes/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    HomeComponent,
    CardsContainerComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
