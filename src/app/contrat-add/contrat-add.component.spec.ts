import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { ContratAddComponent } from './contrat-add.component';
import { KhaddemService } from '../khaddem.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
describe('ContratAddComponent', () => {
  let component: ContratAddComponent;
  let fixture: ComponentFixture<ContratAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContratAddComponent],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule], 
      providers: [KhaddemService,FormBuilder], 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
