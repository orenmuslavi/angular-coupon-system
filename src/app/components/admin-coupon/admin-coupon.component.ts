import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-admin-coupon',
  templateUrl: './admin-coupon.component.html',
  styleUrls: ['./admin-coupon.component.css']
})
export class AdminCouponComponent implements OnInit {
  public currentDate: Date;

  // public constructor(private router: Router, private http: HttpClient) { }
  public constructor(private router: Router) {
    // this.showButtons.showButtons();
   }
  
  ngOnInit() {}

  
  logout() {
    this.router.navigateByUrl('/login');
  }

}
