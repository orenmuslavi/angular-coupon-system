import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCouponComponent } from './components/admin-coupon/admin-coupon.component';
import { CustomerCouponComponent } from './components/customer-coupon/customer-coupon.component';
import { CompanyCouponComponent } from './components/company-coupon/company-coupon.component'; 
import { LoginComponent } from './login/login.component'; 

//admin page menu
import { CompanyAdminViewComponent } from './components/admin-coupon/company-admin-view/company-admin-view.component';
import { CouponAdminViewComponent } from './components/admin-coupon/coupon-admin-view/coupon-admin-view.component';
import { CustomerAdminViewComponent } from './components/admin-coupon/customer-admin-view/customer-admin-view.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  //{ path: '**', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminCouponComponent,
    children: [
      { path: '', component: CompanyAdminViewComponent },
      { path: '**', component: CompanyAdminViewComponent },
      { path: 'companyList', component: CompanyAdminViewComponent },
      { path: 'customerList', component: CustomerAdminViewComponent},
      { path: 'couponList', component: CouponAdminViewComponent },
    ]
  },
  { path: 'customer', component: CustomerCouponComponent },
  { path: 'company', component: CompanyCouponComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
