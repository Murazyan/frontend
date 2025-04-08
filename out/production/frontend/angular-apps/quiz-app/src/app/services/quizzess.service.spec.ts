import { TestBed } from '@angular/core/testing';

import { QuizzessService } from './quizzess.service';

describe('QuizzessService', () => {
  let service: QuizzessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
