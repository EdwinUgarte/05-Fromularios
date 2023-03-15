import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', component: BasicosComponent },
      { path: 'dinamicos', component: DinamicosComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: 'prueba', component: PruebaComponent },
      { path: '**', redirectTo: 'basicos' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveRoutingModule {}
