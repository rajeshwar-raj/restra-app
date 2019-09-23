import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lat: number;
  lng: number;
  locations: any;
  currLocation;

  

  constructor(private locService:LocationService,
    private router: Router) { }

  ngOnInit() {
    this.locations = ['Bengaluru', 'Hyderabad','Mumbai', 'Delhi'];
  }

  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: Position) => {
          if (position) {
            console.log("Latitude: " + position.coords.latitude +
              "Longitude: " + position.coords.longitude);
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            console.log(this.lat);
            console.log(this.lat);
            this.locService.getLocation(this.lat,this.lng).subscribe(res =>{
              let data:any=res;
              this.currLocation = `${data.location.title}, ${data.location.city_name}`;
              this.locService.setLocation(data.location);
              this.locService.setRestaurants(data.nearby_restaurants);
              this.router.navigateByUrl('/restaurantList');    
                  });

          }
        },
          (error: PositionError) => console.log(error));
      } else {
        alert("Geolocation is not supported by this browser.");
      }
  }

}
