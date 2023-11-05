import { TestBed } from '@angular/core/testing';

import { KhaddemService } from './khaddem.service';

describe('KhaddemService', () => {
  let service: KhaddemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhaddemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
