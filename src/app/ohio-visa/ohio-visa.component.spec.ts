import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhioVisaComponent } from './ohio-visa.component';

describe('OhioVisaComponent', () => {
  let component: OhioVisaComponent;
  let fixture: ComponentFixture<OhioVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhioVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhioVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
