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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {APIInterceptor} from './interceptors/api-interceptor.service';
import {MockInterceptor} from './interceptors/mock-interceptor.service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {locationsReducer} from './store/locations.reducer';
import {EffectsModule} from '@ngrx/effects';
import {LocationsEffects} from './store/locations.effects';
import {MatButtonModule} from '@angular/material/button';

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
    StoreModule.forRoot({locations: locationsReducer}, {}),
    EffectsModule.forRoot([LocationsEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Weather App',
      logOnly: environment.production
    }),
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: MockInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
