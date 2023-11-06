import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratAllComponent } from './contrat-all.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { KhaddemService } from '../khaddem.service';

describe('ContratAllComponent', () => {
  let component: ContratAllComponent;
  let fixture: ComponentFixture<ContratAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratAllComponent ],
      imports: [HttpClientTestingModule], 
      providers: [KhaddemService], 
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
