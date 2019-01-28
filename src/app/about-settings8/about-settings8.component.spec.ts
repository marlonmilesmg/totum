import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSettings8Component } from './about-settings8.component';

describe('AboutSettings8Component', () => {
  let component: AboutSettings8Component;
  let fixture: ComponentFixture<AboutSettings8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSettings8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSettings8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
