import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../location.service';
import { Router, NavigationEnd } from '@angular/router';
import { RestraState } from '../../states/restra.state';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.less']
})
export class RestaurantListComponent implements OnInit {

  restaurantList:any;
  searchText: string = '';
  constructor(
    private router:Router,
    private restraState: RestraState) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
   }

  ngOnInit() {
    this.restaurantList = this.restraState.getRestaurants();
  }

  
  
}
