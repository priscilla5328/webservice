import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhioTransComponent } from './ohio-trans.component';

describe('OhioTransComponent', () => {
  let component: OhioTransComponent;
  let fixture: ComponentFixture<OhioTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhioTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhioTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
