import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ang-app';
  //isLoading:boolean=true;

  constructor( private router: Router, private locSer: LocationService){}
  ngOnInit(){
    this.router.navigate(['']);
  }
  isLoading(){
    return this.locSer.getIsLoading();
  }
}
