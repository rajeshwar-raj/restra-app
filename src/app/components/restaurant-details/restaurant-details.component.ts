import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../location.service';
import { RestraState } from '../../states/restra.state';
import { UserImageService } from '../../services/user-image-service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.less']
})
export class RestaurantDetailsComponent implements OnInit {
  restraDetails: any;
  rd;
  showImgCarousel: boolean;

  constructor(
    private restraState: RestraState,
    private userImgSer: UserImageService) { }

  ngOnInit() {
    this.restraDetails = this.restraState.getRestraDetails();
    this.rd = this.restraDetails;
    //this.showImgCarousel = false;
  }
  openCarousel(index){
    this.userImgSer.setUserImgList(this.rd.photos,index);
    this.userImgSer.setShowImgCarousel(true);
    //this.userImgSer
  }
  showImgCarouselFn(){
    return this.userImgSer.getShowImgCarousel();
  }
}
