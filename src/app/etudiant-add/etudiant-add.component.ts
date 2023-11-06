import { Component, OnInit } from '@angular/core';
import { KhaddemService } from '../khaddem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.css']
})
export class EtudiantAddComponent implements OnInit {
  etudiant = { prenomE: '', nomE: '', op: '' };
  studentAdded = false;
  constructor(private khademService:KhaddemService,private router:Router) { }

  ngOnInit(): void {
  }


  addEtudiant() {
    this.khademService.addEtudiant(this.etudiant).subscribe((response) => {
      console.log('Student added successfully:', response);
      this.studentAdded = true;
      setTimeout(() => {
        this.router.navigate(["getall"]);
      }, 5000); 
    });
  }
}
