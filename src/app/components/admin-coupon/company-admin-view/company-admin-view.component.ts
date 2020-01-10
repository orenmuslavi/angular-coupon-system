import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientJsonpModule, HttpResponse } from '@angular/common/http';



@Component({
  selector: 'app-company-admin-view',
  templateUrl: './company-admin-view.component.html',
  styleUrls: ['./company-admin-view.component.css']
})
export class CompanyAdminViewComponent implements OnInit {
 
  private _urlGetAll = "http://localhost:8080/admin/companies"
  private _urlCompanyCounter = "http://localhost:8080/admin/companies_counter"
  private _urlCustomerCounter = "http://localhost:8080/admin/customers_counter"
  private _urlCouponCounter = "http://localhost:8080/admin/coupons_counter"
  public companyCounter :number = 0;
  public customersCounter :number = 0;
  public couponsCounter :number = 0;
  public companies = [];
  public customers = [];
  public coupons = [];
  private data;
  

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    //debug mode only 
    let resp = this.http.get(this._urlGetAll);
    resp.subscribe((data) => console.log(data));
    //Get All Companies 
    this.http.get(this._urlGetAll).subscribe((data: any[]) => {
    this.companies = data;
    });

    this.http.get(this._urlCompanyCounter).subscribe((data: number) =>{
      this.companyCounter = data;
    });
    this.http.get(this._urlCustomerCounter).subscribe((data: number) =>{
      this.customersCounter = data;
    });
    this.http.get(this._urlCouponCounter).subscribe((data: number) =>{
      this.couponsCounter = data;
    });
  }
 
  
  }


