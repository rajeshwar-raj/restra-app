import { Component, OnInit, Input } from '@angular/core';
import { UserImageService } from '../../services/user-image-service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
  

  constructor(
    private userImgSer:UserImageService
  ) { }

  
  userImg:any;
  imgHolder;
  imgIndex;

  ngOnInit() {
    this.imgHolder = document.getElementById("carouselImage");
    this.userImg= this.userImgSer.getUserImgList();
    this.imgIndex = this.userImgSer.getUserImgIndex();
    if(this.userImg.length > 0){
      this.imgHolder.src=this.userImg[this.imgIndex].photo.url    }
  }
  next(){
    this.imgIndex++;
    if(this.imgIndex <= this.userImg.length -1){
      
      this.imgHolder.src=this.userImg[this.imgIndex].photo.url
    }else{
      this.imgIndex = 0;
      this.imgHolder.src=this.userImg[this.imgIndex].photo.url
    }
  }
  prev(){
    this.imgIndex--;
    if(this.imgIndex >= 0){
      
      this.imgHolder.src=this.userImg[this.imgIndex].photo.url
    }else{
      this.imgIndex=this.userImg.length-1;
      this.imgHolder.src=this.userImg[this.imgIndex].photo.url
    } 
   }
   close(){
    this.userImgSer.setShowImgCarousel(false);
   }

}
