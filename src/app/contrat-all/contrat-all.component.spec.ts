import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratAllComponent } from './contrat-all.component';

describe('ContratAllComponent', () => {
  let component: ContratAllComponent;
  let fixture: ComponentFixture<ContratAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratAllComponent ]
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
