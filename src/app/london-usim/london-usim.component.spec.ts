import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonUsimComponent } from './london-usim.component';

describe('LondonUsimComponent', () => {
  let component: LondonUsimComponent;
  let fixture: ComponentFixture<LondonUsimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LondonUsimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LondonUsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
