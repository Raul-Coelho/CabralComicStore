import { TestBed } from '@angular/core/testing';

import { ComicsService } from './comics.service';

describe('ComicsServiceService', () => {
  let service: ComicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
