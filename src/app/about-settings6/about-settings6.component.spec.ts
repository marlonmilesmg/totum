import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSettings6Component } from './about-settings6.component';

describe('AboutSettings6Component', () => {
  let component: AboutSettings6Component;
  let fixture: ComponentFixture<AboutSettings6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSettings6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSettings6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
