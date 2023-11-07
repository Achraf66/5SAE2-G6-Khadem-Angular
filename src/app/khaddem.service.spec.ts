import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { KhaddemService } from './khaddem.service';

describe('KhaddemService', () => {
  let injector: TestBed;
  let service: KhaddemService;
  let httpTestingController: HttpTestingController;
  interface Contrat {
    id: number;
    montant: number
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [KhaddemService],
    });

    injector = getTestBed();
    service = injector.inject(KhaddemService);
    httpTestingController = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should add a contrat', () => {
    const mockContrat =  { id: 1,montant:5000 };

    service.addContrat(mockContrat).subscribe((response) => {
      expect(response).toEqual(mockContrat);
    });

    const req = httpTestingController.expectOne('http://172.22.0.3:8089/Kaddem/contrat/add-contrat');
    expect(req.request.method).toBe('POST');
    req.flush(mockContrat);
  });

  it('should retrieve contrats', () => {
    const mockContrats: Contrat[] = [
      { id: 1,montant:5000 },
      { id: 2,montant:6000 },
    ];
    service.getcontrats().subscribe((response) => {
      expect(response).toEqual(mockContrats);
    });

    const req = httpTestingController.expectOne('http://172.22.0.3:8089/Kaddem/contrat/retrieve-all-contrats');
    expect(req.request.method).toBe('GET');
    req.flush(mockContrats);
  });
});
