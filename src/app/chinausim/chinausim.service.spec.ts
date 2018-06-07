import { TestBed, inject } from '@angular/core/testing';

import { ChinausimService } from './chinausim.service';

xdescribe('ChinausimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChinausimService]
    });
  });

  it('should be created', inject([ChinausimService], (service: ChinausimService) => {
    expect(service).toBeTruthy();
  }));
});
