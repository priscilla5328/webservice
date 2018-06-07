import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonTransComponent } from './london-trans.component';

describe('LondonTransComponent', () => {
  let component: LondonTransComponent;
  let fixture: ComponentFixture<LondonTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LondonTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LondonTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
