import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratAllComponent } from './contrat-all.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { KhaddemService } from '../khaddem.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

describe('ContratAllComponent', () => {
  let component: ContratAllComponent;
  let fixture: ComponentFixture<ContratAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratAllComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      providers: [KhaddemService,FormBuilder], 
      
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
