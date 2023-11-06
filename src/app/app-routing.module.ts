import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantAddComponent } from './etudiant-add/etudiant-add.component';
import { EtudiantAllComponent } from './etudiant-all/etudiant-all.component';

const routes: Routes = [

  { path: 'add', component: EtudiantAddComponent },
  { path: 'getall', component: EtudiantAllComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
