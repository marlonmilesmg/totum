import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInsuranceTile1Component } from './car-insurance-tile1.component';

describe('CarInsuranceTile1Component', () => {
  let component: CarInsuranceTile1Component;
  let fixture: ComponentFixture<CarInsuranceTile1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInsuranceTile1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInsuranceTile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
