import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSettings9Component } from './about-settings9.component';

describe('AboutSettings9Component', () => {
  let component: AboutSettings9Component;
  let fixture: ComponentFixture<AboutSettings9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSettings9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSettings9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
