import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const url = 'https://developers.zomato.com/api/v2.1';
@Injectable({
  providedIn: 'root'
})


export class LocationService {
  currentLocation: any;
  nearby_restaurants:any;
  restraDeatils: any;
  restraDetails: any;

  
  constructor(private httpClient:HttpClient) { }
  httpOptions={ headers: new HttpHeaders({
     'Accept': 'application/json',
     'user-key': 'e89ec9e56e11ec7b6a35cf7bd727d382'

    })};

  

  getLocation(lat,lon){
    let uri = `${url}/geocode?lat=${lat}&lon=${lon}`;
    return this.httpClient.get(uri,this.httpOptions);
  }
   
  setLocation(loc){
    this.currentLocation = loc;
  }

  setRestaurants(resList){
    this.nearby_restaurants = resList;
  }

  getRestaurants(){
    return this.nearby_restaurants;
  }

  getRestraunt(restId){
    let uri = `${url}/restaurant?res_id=${restId}`;
    return this.httpClient.get(uri,this.httpOptions);
  }

  setRetraDetails(details){
    this.restraDetails = details;
  }

  getRestraDetails(){
    return this.restraDetails;
  }
}
