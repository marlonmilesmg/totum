import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInsuranceCard1Component } from './car-insurance-card1.component';

describe('CarInsuranceCard1Component', () => {
  let component: CarInsuranceCard1Component;
  let fixture: ComponentFixture<CarInsuranceCard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInsuranceCard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInsuranceCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
