import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from '../../../location.service';
import { RestraState } from '../../states/restra.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.less']
})
export class RestaurantCardComponent implements OnInit {

  constructor(
    private locSer: LocationService,
    private restraState: RestraState,
    private router: Router
  ) { }

  @Input()
  rest:any;

  ngOnInit() {
  }

  getRestaurant(rest_id){
    this.locSer.setIsLoading(true);
    this.locSer.getRestraunt(rest_id).subscribe(response=> {
      let res:any=response;
      this.restraState.setRetraDetails(res);
      this.router.navigateByUrl('/restaurant-details');
      this.locSer.setIsLoading(false);
    })
  }
}
