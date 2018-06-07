import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhioUsimComponent } from './ohio-usim.component';

describe('OhioUsimComponent', () => {
  let component: OhioUsimComponent;
  let fixture: ComponentFixture<OhioUsimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhioUsimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhioUsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
