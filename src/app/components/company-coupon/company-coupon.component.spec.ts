import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCouponComponent } from './company-coupon.component';

describe('CompanyCouponComponent', () => {
  let component: CompanyCouponComponent;
  let fixture: ComponentFixture<CompanyCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
