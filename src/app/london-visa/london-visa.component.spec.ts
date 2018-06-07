import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonVisaComponent } from './london-visa.component';

describe('LondonVisaComponent', () => {
  let component: LondonVisaComponent;
  let fixture: ComponentFixture<LondonVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LondonVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LondonVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
