import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.less']
})
export class UserReviewComponent implements OnInit {

  constructor() { }

  @Input()
  review:any;
  
  ngOnInit() {
  }

}
