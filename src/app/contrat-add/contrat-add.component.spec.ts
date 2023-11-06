import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { ContratAddComponent } from './contrat-add.component';
import { KhaddemService } from '../khaddem.service';
describe('ContratAddComponent', () => {
  let component: ContratAddComponent;
  let fixture: ComponentFixture<ContratAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContratAddComponent],
      imports: [HttpClientTestingModule,RouterTestingModule], 
      providers: [KhaddemService], 
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
