import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSettings4Component } from './about-settings4.component';

describe('AboutSettings4Component', () => {
  let component: AboutSettings4Component;
  let fixture: ComponentFixture<AboutSettings4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSettings4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSettings4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
