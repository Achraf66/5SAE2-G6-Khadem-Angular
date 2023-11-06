import { Component, OnInit } from '@angular/core';
import { KhaddemService } from '../khaddem.service';

@Component({
  selector: 'app-contrat-all',
  templateUrl: './contrat-all.component.html',
  styleUrls: ['./contrat-all.component.css']
})
export class ContratAllComponent implements OnInit {
  contrats: any;

  constructor(private khaddemService:KhaddemService) { }

  ngOnInit(): void {
    this.getAllcontrat()
  }


  getAllcontrat()
  {
    this.khaddemService.getcontrats().subscribe(
      (data)=> {
        this.contrats = data;
        console.log(data)
      }
    )

  }
}
