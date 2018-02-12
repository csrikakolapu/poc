import { TestBed, inject } from '@angular/core/testing';

import { FetchFileDataService } from './fetch-file-data.service';

describe('FetchFileDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchFileDataService]
    });
  });

  it('should be created', inject([FetchFileDataService], (service: FetchFileDataService) => {
    expect(service).toBeTruthy();
  }));
});
