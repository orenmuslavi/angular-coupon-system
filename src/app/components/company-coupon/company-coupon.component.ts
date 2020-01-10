import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-coupon',
  templateUrl: './company-coupon.component.html',
  styleUrls: ['./company-coupon.component.css']
})
export class CompanyCouponComponent implements OnInit {
  public currentDate:Date;
  
  public constructor(private router: Router) { }

  ngOnInit() {
    this.currentDate = new Date();
  }

  logout(){
    this.router.navigateByUrl('/login');
  }

}
