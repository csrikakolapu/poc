import { TestBed, inject } from '@angular/core/testing';

import { FetchFileService } from './fetch-file.service';

describe('FetchFileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchFileService]
    });
  });

  it('should be created', inject([FetchFileService], (service: FetchFileService) => {
    expect(service).toBeTruthy();
  }));
});
