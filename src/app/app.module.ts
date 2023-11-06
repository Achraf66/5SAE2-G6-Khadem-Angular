import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtudiantAddComponent } from './etudiant-add/etudiant-add.component';
import { HttpClientModule } from '@angular/common/http';
import { EtudiantAllComponent } from './etudiant-all/etudiant-all.component';
import { ContratAddComponent } from './contrat-add/contrat-add.component';
import { ContratAllComponent } from './contrat-all/contrat-all.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantAddComponent,
    EtudiantAllComponent,
    ContratAddComponent,
    ContratAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
