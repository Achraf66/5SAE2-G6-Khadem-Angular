import { Component, OnInit } from '@angular/core';
import { KhaddemService } from '../khaddem.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contrat-add',
  templateUrl: './contrat-add.component.html',
  styleUrls: ['./contrat-add.component.css']
})
export class ContratAddComponent implements OnInit {
  contrat = { archived: '', montantContrat: '', specialite: '' };
  contratAdded = false;
  contratForm: FormGroup;
  constructor(private khademService:KhaddemService,private router:Router,private fb: FormBuilder) { 
    this.contratForm = this.fb.group({
      archived: ['', Validators.required],
      montantContrat: [null, Validators.required],
      specialite: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }


  addContrat() {
    this.khademService.addContrat(this.contrat).subscribe((response) => {
      console.log('contrat added successfully:', response);
      this.contratAdded = true;
      setTimeout(() => {
        this.router.navigate(["getallcontrat"]);
      }, 5000); 
    });
  }
}
