import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeDetailComponent } from './europe-detail.component';

describe('EuropeDetailComponent', () => {
  let component: EuropeDetailComponent;
  let fixture: ComponentFixture<EuropeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
