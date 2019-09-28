import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const url = 'https://developers.zomato.com/api/v2.1';
@Injectable({
  providedIn: 'root'
})


export class LocationService {
  isLoading: boolean=false;
  
 constructor(private httpClient:HttpClient) { }
  httpOptions={ headers: new HttpHeaders({
     'Accept': 'application/json',
     'user-key': 'e89ec9e56e11ec7b6a35cf7bd727d382'

    })};
getLocation(lat:any,lon:any){
    let uri = `${url}/geocode?lat=${lat}&lon=${lon}`;
    return this.httpClient.get(uri,this.httpOptions);
  }
 
  getRestraunt(restId:any){
    let uri = `${url}/restaurant?res_id=${restId}`;
    return this.httpClient.get(uri,this.httpOptions);
  }

  getLocationEntity(location:any){
    let uri = `${url}/locations?query=${location}`;
    return this.httpClient.get(uri,this.httpOptions);
  }
  getRestraOnEntity(entity_id: any, entity_type: any) {
    let uri = `${url}/location_details?entity_id=${entity_id}&entity_type=${entity_type}`;
    return this.httpClient.get(uri,this.httpOptions);
  }
  getIsLoading(){
    return this.isLoading;
  }
  setIsLoading(load){
    this.isLoading = load;
  }
}
