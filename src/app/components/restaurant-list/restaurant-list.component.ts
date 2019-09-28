import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurantList;
  searchText: string = '';
  constructor(private locSer:LocationService, private router:Router) { }

  ngOnInit() {
    this.restaurantList = this.locSer.getRestaurants();
  }

  getRestaurant(rest_id){
    this.locSer.getRestraunt(rest_id).subscribe(response=> {
      let res:any=response;
      alert('restaurant details fetched');
      this.locSer.setRetraDetails(res);
      this.router.navigateByUrl('/restaurant-details');
    })
  }
  
}
