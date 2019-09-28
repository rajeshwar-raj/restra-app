import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../location.service';
import { Router } from '@angular/router';
import { LocationDetails } from '../../models/locationModel';
import { LocationState } from '../../states/location.state';
import { RestraState } from '../../states/restra.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  lat: number;
  lng: number;
  locations: any;
  currLocation;
  selectedLocation;
  locationDetails: LocationDetails = {entity_id:'',entity_type:'',city_name:''};
  

  constructor(
    private locService:LocationService,
    private router: Router,
    private locState: LocationState,
    private restraState: RestraState) { }

  ngOnInit() {
    this.locations = this.locState.getDefaultLocations();
    this.selectedLocation = this.locations[0];
  }

  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: Position) => {
          if (position) {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.locService.setIsLoading(true);
            this.locService.getLocation(this.lat,this.lng).subscribe(res =>{
              let data:any=res;
              this.currLocation = `${data.location.title}, ${data.location.city_name}`;
              this.locState.setLocation(data.location);
              this.restraState.setRestaurants(data.nearby_restaurants);
              this.router.navigateByUrl('/restaurantList');   
              this.locService.setIsLoading(false); 
                  });

          }
        },
          (error: PositionError) => console.log(error));
      } else {
        alert("Geolocation is not supported by this browser.");
      }
  }
  selectLocation($event){
    if($event != undefined){
      this.locService.setIsLoading(true);
      this.locService.getLocationEntity($event).subscribe(res =>{
        let response:any=res;
        this.locationDetails.entity_id = response.location_suggestions[0].entity_id;
        this.locationDetails.entity_type = response.location_suggestions[0].entity_type;
        this.locationDetails.city_name = response.city_name;
        this.locService.getRestraOnEntity(this.locationDetails.entity_id,this.locationDetails.entity_type).subscribe(data =>{
          let data1:any=data;
          this.locState.setLocation(data1.location);
          this.restraState.setRestaurants(data1.best_rated_restaurant);
          this.router.navigateByUrl('/restaurantList');  
          this.locService.setIsLoading(false);
        })

      })
    }
  }

}
