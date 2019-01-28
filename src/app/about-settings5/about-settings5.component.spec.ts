import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSettings5Component } from './about-settings5.component';

describe('AboutSettings5Component', () => {
  let component: AboutSettings5Component;
  let fixture: ComponentFixture<AboutSettings5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSettings5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSettings5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
