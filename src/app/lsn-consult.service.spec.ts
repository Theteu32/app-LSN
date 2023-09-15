import { TestBed } from '@angular/core/testing';

import { LsnConsultService } from './lsn-consult.service';

describe('LsnConsultService', () => {
  let service: LsnConsultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LsnConsultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
