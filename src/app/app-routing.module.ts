import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantAddComponent } from './etudiant-add/etudiant-add.component';
import { EtudiantAllComponent } from './etudiant-all/etudiant-all.component';
import { ContratAddComponent } from './contrat-add/contrat-add.component';
import { ContratAllComponent } from './contrat-all/contrat-all.component';

const routes: Routes = [

  { path: 'add', component: EtudiantAddComponent },
  { path: 'getall', component: EtudiantAllComponent },
  { path: 'addcontrat', component: ContratAddComponent },
  { path: 'getallcontrat', component: ContratAllComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
