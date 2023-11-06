import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { KhaddemService } from './khaddem.service';

describe('KhaddemService', () => {
  let service: KhaddemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule
      providers: [KhaddemService],
    });
    service = TestBed.inject(KhaddemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
