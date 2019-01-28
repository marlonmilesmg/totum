import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSettings1Component } from './about-settings1.component';

describe('AboutSettings1Component', () => {
  let component: AboutSettings1Component;
  let fixture: ComponentFixture<AboutSettings1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSettings1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSettings1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
