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

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    HomeComponent,
    CardsContainerComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      StoreModule.forRoot({}, {}),
      BrowserAnimationsModule,
      MatCardModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
