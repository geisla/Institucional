import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NossaVisaoComponent } from './nossa-visao.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'nossa-visao', component:NossaVisaoComponent}
    ])
  ],
  declarations: [
    NossaVisaoComponent
  ]
})
export class NossaVisaoModule { }
