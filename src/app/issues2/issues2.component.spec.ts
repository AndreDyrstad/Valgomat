import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Issues2Component } from './issues2.component';

describe('Issues2Component', () => {
  let component: Issues2Component;
  let fixture: ComponentFixture<Issues2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Issues2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Issues2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
