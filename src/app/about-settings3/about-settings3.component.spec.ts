import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSettings3Component } from './about-settings3.component';

describe('AboutSettings3Component', () => {
  let component: AboutSettings3Component;
  let fixture: ComponentFixture<AboutSettings3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSettings3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSettings3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
