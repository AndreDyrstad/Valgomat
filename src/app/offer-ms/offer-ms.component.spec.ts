import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferMsComponent } from './offer-ms.component';

describe('OfferMsComponent', () => {
  let component: OfferMsComponent;
  let fixture: ComponentFixture<OfferMsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferMsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
