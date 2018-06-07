import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaDetailComponent } from './usa-detail.component';

describe('UsaDetailComponent', () => {
  let component: UsaDetailComponent;
  let fixture: ComponentFixture<UsaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
