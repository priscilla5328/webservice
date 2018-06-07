import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinausimDetailComponent } from './chinausim-detail.component';
import { ChinausimService } from '../chinausim.service';
import { FormsModule } from '@angular/forms';


xdescribe('ChinausimDetailComponent', () => {
  let component: ChinausimDetailComponent;
  let fixture: ComponentFixture<ChinausimDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinausimDetailComponent ],
      providers: [ { provide: ChinausimService, useValue: { }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinausimDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
