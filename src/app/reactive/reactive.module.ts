import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { PruebaComponent } from './prueba/prueba.component';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    PruebaComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
