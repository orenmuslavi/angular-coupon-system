import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-coupon',
  templateUrl: './customer-coupon.component.html',
  styleUrls: ['./customer-coupon.component.css']
})
export class CustomerCouponComponent implements OnInit {
  public currentDate:Date;
  
  public constructor(private router: Router) { }

  ngOnInit() {
    this.currentDate = new Date();
  }

  logout(){
    this.router.navigateByUrl('/login');
  }

}
