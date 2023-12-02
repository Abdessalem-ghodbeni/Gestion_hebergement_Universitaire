import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { LayoutEtudiantComponent } from './layout-etudiant/layout-etudiant.component';


@NgModule({
  declarations: [
    LayoutEtudiantComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
