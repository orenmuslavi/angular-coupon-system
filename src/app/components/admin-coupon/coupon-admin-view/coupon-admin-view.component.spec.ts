import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponAdminViewComponent } from './coupon-admin-view.component';

describe('CouponAdminViewComponent', () => {
  let component: CouponAdminViewComponent;
  let fixture: ComponentFixture<CouponAdminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponAdminViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
