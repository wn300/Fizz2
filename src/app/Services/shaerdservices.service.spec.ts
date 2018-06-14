import { TestBed, inject } from '@angular/core/testing';

import { ShaerdservicesService } from './shaerdservices.service';

describe('ShaerdservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShaerdservicesService]
    });
  });

  it('should be created', inject([ShaerdservicesService], (service: ShaerdservicesService) => {
    expect(service).toBeTruthy();
  }));
});
