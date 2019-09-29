import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  
export class UserImageService{

    constructor(){}

    selectedIndex;
    userImgList;
    showImgCarousel:boolean=false;

    setUserImgList(imgList:any,index?:any){
        this.userImgList = imgList;
        this.selectedIndex = index;
    }
    getUserImgList(){
        return this.userImgList;
    }
    getUserImgIndex(){
        return this.selectedIndex;
    }
    setShowImgCarousel(status){
        this.showImgCarousel = status;
    }
    getShowImgCarousel(){
        return this.showImgCarousel;
    }
}