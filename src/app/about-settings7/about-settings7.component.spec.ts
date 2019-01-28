import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSettings7Component } from './about-settings7.component';

describe('AboutSettings7Component', () => {
  let component: AboutSettings7Component;
  let fixture: ComponentFixture<AboutSettings7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSettings7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSettings7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
