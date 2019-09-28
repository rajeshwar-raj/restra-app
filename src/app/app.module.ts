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
import { FilterPipe } from './custom-filter/filter.pipe';
import {FormsModule} from "@angular/forms";
import { RestraState } from './states/restra.state';
import { LocationState } from './states/location.state';
import { UserReviewComponent } from './components/user-review/user-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    RestaurantCardComponent,
    FilterPipe,
    UserReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LocationService,
    RestraState,
    LocationState
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
