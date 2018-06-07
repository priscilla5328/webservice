import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinausimListComponent } from './chinausim-list.component';

xdescribe('ChinausimListComponent', () => {
  let component: ChinausimListComponent;
  let fixture: ComponentFixture<ChinausimListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinausimListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinausimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
