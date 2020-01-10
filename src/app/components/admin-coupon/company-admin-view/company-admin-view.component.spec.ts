import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdminViewComponent } from './company-admin-view.component';

describe('CompanyAdminViewComponent', () => {
  let component: CompanyAdminViewComponent;
  let fixture: ComponentFixture<CompanyAdminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAdminViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
