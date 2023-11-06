import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtudiantAllComponent } from './etudiant-all.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

describe('EtudiantAllComponent', () => {
  let component: EtudiantAllComponent;
  let fixture: ComponentFixture<EtudiantAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudiantAllComponent],
      imports: [HttpClientModule], // Include HttpClientModule here
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
