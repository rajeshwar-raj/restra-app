import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })


export class LocationState {
  
    constructor() { }
  currentLocation: any;
  locations = ['Select Manually','Bengaluru', 'Hyderabad','Mumbai', 'Delhi'];
  
  setLocation(loc){
    this.currentLocation = loc;
  }
  getDefaultLocations(){
      return this.locations;
  }


}
