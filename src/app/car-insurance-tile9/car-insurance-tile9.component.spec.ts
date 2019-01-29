import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInsuranceTile9Component } from './car-insurance-tile9.component';

describe('CarInsuranceTile9Component', () => {
  let component: CarInsuranceTile9Component;
  let fixture: ComponentFixture<CarInsuranceTile9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInsuranceTile9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInsuranceTile9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
