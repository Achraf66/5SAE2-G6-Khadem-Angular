import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KhaddemService {

  constructor(private http:HttpClient) { }

  addEtudiant(etudiant:any)
  {
    return this.http.post("http://localhost:8089/Kaddem/etudiant/add-etudiant",etudiant);
  }

  getEtudiant()
  {
    return this.http.get("http://localhost:8089/Kaddem/etudiant/retrieve-all-etudiants");
  }


    addContrat(contrat:any)
  {
    return this.http.post("http://localhost:8089/Kaddem/contrat/add-contrat",contrat);
  }

  getcontrats()
  {
    return this.http.get("http://localhost:8089/Kaddem/contrat/retrieve-all-contrats");
  }

}
