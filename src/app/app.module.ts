import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminCouponComponent } from './components/admin-coupon/admin-coupon.component';
import { CustomerCouponComponent } from './components/customer-coupon/customer-coupon.component';
import { CompanyCouponComponent } from './components/company-coupon/company-coupon.component';
import { LoginComponent } from './login/login.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { CompanyAdminViewComponent } from './components/admin-coupon/company-admin-view/company-admin-view.component';
import { CustomerAdminViewComponent } from './components/admin-coupon/customer-admin-view/customer-admin-view.component';
import { CouponAdminViewComponent } from './components/admin-coupon/coupon-admin-view/coupon-admin-view.component'; 
import { Ng2OdometerModule } from 'ng2-odometer';
import { CouponComponent } from './components/coupon/coupon.component'; // <-- import the module


@NgModule({
  declarations: [
    AppComponent,
    AdminCouponComponent,
    CustomerCouponComponent,
    CompanyCouponComponent,
    LoginComponent,
    AdminMenuComponent,
    CompanyAdminViewComponent,
    CustomerAdminViewComponent,
    CouponAdminViewComponent,
    CouponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2OdometerModule.forRoot() // <-- include it in your app module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export interface Characters {
  id: String;
  name: String;
}
