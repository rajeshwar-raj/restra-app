import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../location.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  restraDetails: any;
  rd;

  constructor(private locSer:LocationService) { }

  ngOnInit() {
    this.restraDetails = this.locSer.getRestraDetails();
    this.rd = this.restraDetails;
  }

}
