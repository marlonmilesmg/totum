import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSettings2Component } from './about-settings2.component';

describe('AboutSettings2Component', () => {
  let component: AboutSettings2Component;
  let fixture: ComponentFixture<AboutSettings2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSettings2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSettings2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
