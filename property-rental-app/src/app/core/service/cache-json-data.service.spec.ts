import { TestBed } from '@angular/core/testing';

import { CacheJsonDataService } from './cache-json-data.service';

describe('CacheJsonDataService', () => {
  let service: CacheJsonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheJsonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
