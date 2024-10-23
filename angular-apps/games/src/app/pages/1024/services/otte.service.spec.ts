import { TestBed } from '@angular/core/testing';

import { OtteService } from './otte.service';

describe('OtteService', () => {
  let service: OtteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
