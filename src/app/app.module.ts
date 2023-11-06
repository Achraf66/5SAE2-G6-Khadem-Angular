import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EtudiantAddComponent } from './etudiant-add/etudiant-add.component';
import { HttpClientModule } from '@angular/common/http';
import { EtudiantAllComponent } from './etudiant-all/etudiant-all.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantAddComponent,
    EtudiantAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
