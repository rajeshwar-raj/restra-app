import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LocationService } from '../location.service';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    RestaurantCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
