import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuemSomosComponent } from './quem-somos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'quem-somos', component: QuemSomosComponent}
    ])
  ],
  declarations: [
    QuemSomosComponent
  ]
})
export class QuemSomosModule { }
