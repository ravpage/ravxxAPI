import { TestBed, inject } from '@angular/core/testing';

import { RavxxApiService } from './ravxx-api.service';

describe('RavxxApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RavxxApiService]
    });
  });

  it('should be created', inject([RavxxApiService], (service: RavxxApiService) => {
    expect(service).toBeTruthy();
  }));
});
