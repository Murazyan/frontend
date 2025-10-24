import { TestBed } from '@angular/core/testing';

import { NumberPaginationService } from './number-pagination.service';

describe('NumberPaginationService', () => {
  let service: NumberPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
