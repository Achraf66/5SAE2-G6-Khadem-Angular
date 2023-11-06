import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantAllComponent } from './etudiant-all.component';

describe('EtudiantAllComponent', () => {
  let component: EtudiantAllComponent;
  let fixture: ComponentFixture<EtudiantAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantAllComponent ]
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
