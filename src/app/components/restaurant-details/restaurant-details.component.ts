import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../location.service';
import { RestraState } from '../../states/restra.state';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.less']
})
export class RestaurantDetailsComponent implements OnInit {
  restraDetails: any;
  rd;

  constructor(
    private restraState: RestraState) { }

  ngOnInit() {
    this.restraDetails = this.restraState.getRestraDetails();
    this.rd = this.restraDetails;
  }

}
