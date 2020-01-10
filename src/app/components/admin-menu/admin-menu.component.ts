import { Component, OnInit, Injectable  } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})

@Injectable () 

export class AdminMenuComponent implements OnInit {

  // public showButtons1:boolean = false;
  // public showButtons2:boolean = false;
  // public showButtons3:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // showButtons(currentLink){
  //   if(currentLink === 1){
  //     this.showButtons1 = true;
  //     this.showButtons2 = false;
  //     this.showButtons3 = false;
  //   }
  //   if(currentLink === 2){
  //     this.showButtons1 = false;
  //     this.showButtons3 = false;
  //     this.showButtons2 = true;
  //   }
  //   if(currentLink === 3){
  //     this.showButtons1 = false;
  //     this.showButtons2 = false;
  //     this.showButtons3 = true;
  //   }
  // }


  links: any[] = [
    {
      "name"  : "Company",
      "id"    : "1",
      "route" : "companyList"
    },
    {
      "name"  : "Customer",
      "id"    : "2",
      "route" : "customerList"
    },
    {
      "name"  : "Coupons",
      "id"    : "3",
      "route" : "couponList"
    }
  ];
}
