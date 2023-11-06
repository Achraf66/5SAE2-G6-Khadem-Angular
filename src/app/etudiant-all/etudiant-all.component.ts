import { Component, OnInit } from '@angular/core';
import { KhaddemService } from '../khaddem.service';

@Component({
  selector: 'app-etudiant-all',
  templateUrl: './etudiant-all.component.html',
  styleUrls: ['./etudiant-all.component.css']
})
export class EtudiantAllComponent implements OnInit {

  etudiants:any;
  constructor(private khaddemService:KhaddemService) { }

  ngOnInit(): void {
    this.getAllEtudiant()
  }


  getAllEtudiant()
  {
    this.khaddemService.getEtudiant().subscribe(
      (data)=> {
        this.etudiants = data;
        console.log(data)
      }
    )

  }


}
