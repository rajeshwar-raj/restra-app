import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })


export class RestraState {
  
  nearby_restaurants:any;
  restraDetails: any;

  
  constructor() { }
 

  setRestaurants(resList:any){
    this.nearby_restaurants = resList;
  }

  getRestaurants(){
    return this.nearby_restaurants;
  }

  
  setRetraDetails(details){
    this.restraDetails = details;
  }

  getRestraDetails(){
    return this.restraDetails;
  }
}  
