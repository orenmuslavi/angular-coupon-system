import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAdminViewComponent } from './customer-admin-view.component';

describe('CustomerAdminViewComponent', () => {
  let component: CustomerAdminViewComponent;
  let fixture: ComponentFixture<CustomerAdminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAdminViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
